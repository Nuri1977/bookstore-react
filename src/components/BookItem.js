/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function BookItem({ book }) {
  return (
    <li>
      <h3>{book.category}</h3>
      <h2>{book.title}</h2>
      <h5>{book.author}</h5>
      <div>
        <button type="button">Remove</button>
      </div>
    </li>
  );
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItem;
