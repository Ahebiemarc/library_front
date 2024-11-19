import { useState } from 'react';
import { addBook } from "../services/api";
import {Book} from '../model/Model'
import Popup from './Popup';

const AddBook = () => {

    const [newBook, setNewBook] = useState({ title: '', author: '' });
    const [showSuccess, setShowSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // État pour le préchargement
    const [message, setMessage] = useState("");

    const handleAddBook = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        setIsLoading(true);
        const message = await addBook(newBook);
        setMessage(message); // Affiche le message de succès
        setNewBook({ title: '', author: '' });
        setShowSuccess(true); // Affiche la pop-up
        setIsLoading(false); // Désactive le préchargement

      } catch (error) {
        console.error('Failed to add book:', error);
      }
    };

    const closePopup = () => {
      setShowSuccess(false); // Ferme la pop-up
    };
  
    return (
      <div>
        <h2>Ajouter un livre</h2>
        <form onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Titre"
          value={newBook.title}
          onChange={(e) => setNewBook({...newBook, title: e.target.value})}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={newBook.author}
          onChange={(e) => setNewBook({...newBook, author: e.target.value})}
        />
        <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : "Ajouter un livre"}</button>
      </form>
      {showSuccess && (
        <Popup title='Congratulations' description={message} closePopup={closePopup}/>
      )}
      </div>
    );
  };
  
  export default AddBook;
