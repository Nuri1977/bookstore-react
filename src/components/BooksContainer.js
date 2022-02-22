import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksList from './BooksList';
import FormAddBook from './FormAddBook';
import { getBooks } from '../redux/books/books';

function BooksContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const books = useSelector((state) => state.books);
  if (books.length) console.log(books);
  return (
    <div className="container">
      <BooksList books={books} />
      <FormAddBook />
    </div>
  );
}

export default BooksContainer;
