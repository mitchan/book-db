import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';
import { Book } from '../models/book';
import { Router } from '@angular/router';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly basePath = 'http://localhost:3000/books';

  constructor(
    //
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  getBooks() {
    return this.http.get<Book[]>(this.basePath).pipe(
      tap(() => this.loadingService.startLoading()),
      delay(750),
      tap(() => this.loadingService.stopLoading())
    );
  }

  getBook(id: string) {
    return this.http.get<Book>(`${this.basePath}/${id}`).pipe(
      tap(() => this.loadingService.startLoading()),
      delay(750),
      tap(() => this.loadingService.stopLoading())
    );
  }

  create(book: Book) {
    return this.http.post<Book>(`${this.basePath}`, book).pipe(
      tap(() => this.loadingService.startLoading()),
      delay(750),
      tap(() => this.loadingService.stopLoading())
    );
  }

  updateBook(book: Book) {
    return this.http.patch<Book>(`${this.basePath}/${book.id}`, book).pipe(
      tap(() => this.loadingService.startLoading()),
      delay(750),
      tap(() => this.loadingService.stopLoading())
    );
  }
}
