import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Book } from '../models/book';

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
}
