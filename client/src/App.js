import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./views/home";
import BooksMain from "./views/booksHome";
import Book from "./views/Book";
import BooksByGenre from "./views/BooksByGenre";
import BooksByGenre_format from "./views/BooksByGenre_Format";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksMain /> } />
        <Route path="/book/:id" element={<Book /> } />
        <Route path="/books/:genre" element={<BooksByGenre /> } />
        <Route path='/books/:format' element={<BooksByGenre_format /> } />
        <Route path='/books/:genre/:format' element={<BooksByGenre_format /> } />
      </Routes>
    </div>
  );
}

export default App;
