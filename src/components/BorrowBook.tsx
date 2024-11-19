import { useState } from 'react';
import { borrowBook } from "../services/api";
import Popup from './Popup';

const BorrowBook = () => {
  const [bookID, setBookID] = useState("");
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // État pour le préchargement


  const handleBorrowBook = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const message = await borrowBook(bookID);
      // Optionally refetch the books list after borrowing
      setMessage(message);
      setShowSuccess(true);
      setIsLoading(false);
      // Reset the form inputs after successful borrowing
      setBookID("");
    } catch (error) {
      console.error('Failed to borrow book:', error);
      setMessage(message);
      console.log(message);
      
      setIsLoading(false);
    }
  }

  const closePopup = () => {
    setShowSuccess(false); // Ferme la pop-up
  };

  return (
    <div>
        <h2>Emprunter un livre</h2>
        <form onSubmit={handleBorrowBook}>
      <input
        type="number"
        placeholder="ID du livre"
        name='id'
        value={bookID}
        onChange={(e) => setBookID(e.target.value)}
      />
      
      <button type="submit" disabled={isLoading} >{isLoading ? 'Loading...' : "Emprunter le livre"}</button>
    </form>
    {showSuccess && (
        <Popup title='Congratulations' description={message} closePopup={closePopup}/>
      )}
    </div>
  );
};

export default BorrowBook;
