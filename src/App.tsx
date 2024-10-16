import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddBook from './components/AddBook';
import BorrowBook from './components/BorrowBook';
import ReturnBook from './components/ReturnBook';
import ListBooks from './components/ListBooks';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Barre de navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Lister les livres</Link>
            </li>
            <li>
              <Link to="/add">Ajouter un livre</Link>
            </li>
            <li>
              <Link to="/borrow">Emprunter un livre</Link>
            </li>
            <li>
              <Link to="/return">Retourner un livre</Link>
            </li>
          </ul>
        </nav>

        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<ListBooks />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/borrow" element={<BorrowBook />} />
          <Route path="/return" element={<ReturnBook />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
