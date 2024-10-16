import { useState } from 'react';
import { borrowBook } from "../services/api";

const BorrowBook = () => {
  const [bookId, setBookId] = useState<number | null>(null);
  const [borrower, setBorrower] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookId !== null) {
      borrowBook({ bookId, borrower, borrowDate: new Date() });
      setBookId(null);
      setBorrower('');
    }
  };

  return (
    <div>
        <h2>Emprunter un livre</h2>
        <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="ID du livre"
        value={bookId ?? ''}
        onChange={(e) => setBookId(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Nom de l'emprunteur"
        value={borrower}
        onChange={(e) => setBorrower(e.target.value)}
      />
      <button type="submit">Emprunter le livre</button>
    </form>
    </div>
  );
};

export default BorrowBook;
