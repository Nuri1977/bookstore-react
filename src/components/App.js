import './App.css';
import { Routes, Route } from 'react-router-dom';
import BooksContainer from './BooksContainer';
import CategoriesContainer from './CategoriesContainer';
import Navigation from './Navigation';

function App() {
  return (
    <div className="Bookstore-CMS">
      <div className="panel-bg-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<BooksContainer />} />
          <Route path="categories" element={<CategoriesContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
