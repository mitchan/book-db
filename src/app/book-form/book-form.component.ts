import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

import { Book } from '../core/models/book';
import { BookService } from '../core/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent {
  @Input() book!: Book;

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit() {
    if (this.book.id) {
      // edit
      this.bookService.updateBook(this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    } else {
      this.bookService
        .create({
          ...this.book,
          id: uuidv4(),
        })
        .subscribe(() => {
          this.router.navigate(['/books']);
        });
    }
  }
}
