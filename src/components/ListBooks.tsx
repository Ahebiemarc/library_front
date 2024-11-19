import { useState, useEffect } from 'react';
import { listBooks } from '../services/api';
import { Book } from '../model/Model';

const ListBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Fetch the list of books on component mount
    const fetchBooks = async () => {
      try {
        const fetchedBooks = await listBooks();
        console.log(fetchedBooks);
        
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
        <h2>Liste des livres</h2>

        {/* Affichage de la liste des livres */}
        <ul>
        {books.map((book) => (
            <li key={book.id} style={{fontSize: '18px'}}>
            {book.id} {`=>`} {book.title} de {book.author} - {book.status === 'available' ? 'Disponible' : 'Emprunté'}
            </li>
        ))}
        </ul>
    </div>
  );
};

export default ListBooks;
