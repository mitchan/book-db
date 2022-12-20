import { Component } from '@angular/core';

import { Book } from '../core/models/book';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent {
  public book: Book = {
    author: '',
    id: '',
    isbn: '',
    title: '',
  };
}
