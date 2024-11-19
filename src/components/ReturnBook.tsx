import { useState } from 'react';
import { returnBook } from "../services/api";
import Popup from './Popup';

const ReturnBook = () => {
  const [bookId, setBookId] = useState("");
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // État pour le préchargement



 

  const handleReturnBook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const message = await returnBook(bookId);
      setShowSuccess(true);
      setIsLoading(false);
      setMessage(message);
      setBookId('');
    } catch (error) {
      console.error('Failed to return book:', error);
      setMessage(message);
      setIsLoading(false);
      console.log(message);
      

    }
  };

  const closePopup = () => {
    setShowSuccess(false); // Ferme la pop-up
  };

  return (
    <div>
        <h2>Retourner un livre</h2>
        <form onSubmit={handleReturnBook}>
        <input
            type="number"
            placeholder="ID du livre"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
        />
        <button type="submit" disabled={isLoading} >{isLoading ? 'Loading...' : "Retourner le livre"} </button>
        </form>
        {showSuccess && (
        <Popup title='Congratulations' description={message} closePopup={closePopup}/>
      )}
    </div>
  );
};

export default ReturnBook;
