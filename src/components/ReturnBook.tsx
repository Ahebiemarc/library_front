import { useState } from 'react';
import { returnBook } from "../services/api";

const ReturnBook = () => {
  const [bookId, setBookId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookId !== null) {
      returnBook(bookId);
      setBookId(null);
    }
  };

  return (
    <div>
        <h2>Retourner un livre</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="number"
            placeholder="ID du livre"
            value={bookId ?? ''}
            onChange={(e) => setBookId(Number(e.target.value))}
        />
        <button type="submit">Retourner le livre</button>
        </form>
    </div>
  );
};

export default ReturnBook;
