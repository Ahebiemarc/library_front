// services/bookService.ts
import { Book, Borrow } from "../model/Model";

let books: Book[] = [
  { id: 1, title: "Les fleurs du aml", author: "Charles Baudelaire", available: true },
  { id: 2, title: "Les misérables", author: "Victor hugo", available: true },
];

export const listBooks = (): Book[] => {
  return books;
};

export const addBook = (book: Book): void => {
  books.push(book);
};

export const borrowBook = (borrow: Borrow): void => {
  const book = books.find(b => b.id === borrow.bookId);
  if (book) {
    book.available = false;
  }
};

export const returnBook = (bookId: number): void => {
  const book = books.find(b => b.id === bookId);
  if (book) {
    book.available = true;
  }
};
