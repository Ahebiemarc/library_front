// models/Book.ts
export interface Book {
    id?: number;
    title: string;
    author: string;
    status?: 'available' | 'borrowed';
  }
  
  // models/Borrow.ts
  export interface Borrow {
    bookId: number;
    borrower: string;
    borrowDate: Date;
  }
  