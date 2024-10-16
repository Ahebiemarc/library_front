// models/Book.ts
export interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
  }
  
  // models/Borrow.ts
  export interface Borrow {
    bookId: number;
    borrower: string;
    borrowDate: Date;
  }
  