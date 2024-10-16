import { useState, useEffect } from 'react';
import { listBooks } from '../services/api';
import { Book } from '../model/Model';

const ListBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(listBooks());
  }, []);

  return (
    <div>
        <h2>Liste des livres</h2>

        {/* Affichage de la liste des livres */}
        <ul>
        {books.map((book) => (
            <li key={book.id} style={{fontSize: '18px'}}>
            {book.id} {`=>`} {book.title} de {book.author} - {book.available ? 'Disponible' : 'Emprunté'}
            </li>
        ))}
        </ul>
    </div>
  );
};

export default ListBooks;
