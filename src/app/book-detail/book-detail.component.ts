import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../core/models/book';
import { BookService } from '../core/services/book.service';
import { CanComponentDeactivate } from '../core/services/unsaved-changes-guard.service';
import { areBookEquals } from '../core/utils/compareBooks';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit, CanComponentDeactivate {
  book?: Book;

  private editedBook?: Book;
  private bookId = this.route.snapshot.paramMap.get('id') ?? '';

  constructor(
    //
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookService.getBook(this.bookId).subscribe((book) => {
      this.book = {
        ...book,
      };
    });
  }

  onBookChanged(book?: Book) {
    this.editedBook = book;
  }

  canDeactivate() {
    return (
      !this.book ||
      !this.editedBook ||
      areBookEquals(this.book, this.editedBook)
    );
  }
}
