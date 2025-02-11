import logo from './logo.svg';
import './App.css';
import { BookProvider } from './BookContext';
import Books from './components/Books';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Navigate to="/" />} />
          <Route path='/books/:bookId' element={<BookDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;
