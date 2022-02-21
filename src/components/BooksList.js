/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BooksList({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksList;
