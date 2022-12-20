import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../core/models/book';
import { BookService } from '../core/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book?: Book;

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
}
