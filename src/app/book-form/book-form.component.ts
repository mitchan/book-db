import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { Book } from '../core/models/book';
import { BookService } from '../core/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit, OnDestroy {
  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    isbn: new FormControl(''),
  });

  @Input() book!: Book;
  @Output() bookChanged = new EventEmitter<Book>();

  private sub?: Subscription;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookForm.patchValue({
      author: this.book.author,
      isbn: this.book.isbn,
      title: this.book.title,
    });

    this.sub = this.bookForm.valueChanges.subscribe(() => {
      this.bookChanged.emit(this.getBookFromForm());
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onDelete() {
    this.bookService.deleteBook(this.book.id).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }

  onSubmit() {
    // reset book to skip validation
    this.bookChanged.emit();

    if (this.book.id) {
      // edit
      this.bookService.updateBook(this.getBookFromForm()).subscribe(() => {
        this.router.navigate(['/books']);
      });
    } else {
      this.bookService
        .create({
          ...this.getBookFromForm(),
          id: uuidv4(),
        })
        .subscribe(() => {
          this.router.navigate(['/books']);
        });
    }
  }

  private getBookFromForm(): Book {
    const raw = this.bookForm.getRawValue();
    return {
      id: this.book.id,
      author: raw.author ?? '',
      isbn: raw.isbn ?? '',
      title: raw.title ?? '',
    };
  }
}
