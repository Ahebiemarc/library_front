import { useState } from 'react';
import { addBook } from "../services/api";

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newBook = { id: Date.now(), title, author, available: true };
      addBook(newBook);
      setTitle('');
      setAuthor('');
    };
  
    return (
      <div>
        <h2>Ajouter un livre</h2>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Ajouter un livre</button>
      </form>
      </div>
    );
  };
  
  export default AddBook;
