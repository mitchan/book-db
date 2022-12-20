import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../core/models/book';
import { BookService } from '../core/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  displayedColumns: string[] = ['title', 'author', 'isbn'];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  onRowClicked(book: Book): void {
    this.router.navigate(['/books', book.id]);
  }

  onCreate(): void {
    this.router.navigate(['/books', 'create']);
  }
}
