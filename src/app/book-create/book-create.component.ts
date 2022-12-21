import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../core/models/book';
import { CanComponentDeactivate } from '../core/services/unsaved-changes-guard.service';
import { areBookEquals } from '../core/utils/compareBooks';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent implements CanComponentDeactivate {
  public book: Book = {
    author: '',
    id: '',
    isbn: '',
    title: '',
  };

  private editedBook?: Book;

  onBookChanged(book?: Book) {
    this.editedBook = book;
  }

  canDeactivate() {
    return !this.editedBook || areBookEquals(this.book, this.editedBook);
  }
}
