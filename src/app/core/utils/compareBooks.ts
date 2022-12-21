import { Book } from '../models/book';

export function areBookEquals(book1: Book, book2?: Book): boolean {
  return (
    book1.author === book2?.author &&
    book1.id === book2?.id &&
    book1.isbn === book2?.isbn &&
    book1.title === book2?.title
  );
}
