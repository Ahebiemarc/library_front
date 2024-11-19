// services/bookService.ts
import { Book } from "../model/Model";

let books: Book[] = [
  { id: 1, title: "Les fleurs du aml", author: "Charles Baudelaire", status: 'available' },
  { id: 2, title: "Les misérables", author: "Victor hugo", status: 'available' },
];

/*export const listBooks = (): Book[] => {
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
};*/


// Fonction pour ajouter un livre
export const addBook = async (book: { title: string, author: string }): Promise<string> => {
  const response = await fetch('http://localhost:18080/add_book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });

  if (!response.ok) {
    throw new Error('Failed to add book');
  }

  const data = await response.json();
  return data.message; // Assuming response contains a message
};



// Fonction pour emprunter un livre
export const borrowBook = async (id: string): Promise<string> => {
  const response = await fetch('http://localhost:18080/borrow_book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error('Failed to borrow book');
  }

  const data = await response.json();
  return data.message;
};

// Fonction pour retourner un livre
export const returnBook = async (id: string): Promise<string> => {
  const response = await fetch('http://localhost:18080/return_book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error('Failed to return book');
  }

  const data = await response.json();
  return data.message;
};

// Fonction pour lister tous les livres
export const listBooks = async (): Promise<Book[]> => {
  const response = await fetch('http://localhost:18080/list_books', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  const data = await response.json();
  return data;
};
