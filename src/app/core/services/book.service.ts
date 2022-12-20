import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Book } from '../models/book';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly basePath = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<Book[]>(this.basePath).pipe(delay(500));
  }

  getBook(id: string) {
    return this.http.get<Book>(`${this.basePath}/${id}`).pipe(delay(500));
  }

  create(book: Book) {
    return this.http.post<Book>(`${this.basePath}`, book).pipe(delay(500));
  }

  updateBook(book: Book) {
    return this.http
      .patch<Book>(`${this.basePath}/${book.id}`, book)
      .pipe(delay(500));
  }
}
