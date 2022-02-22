/* eslint-disable camelcase */
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const getBooks = () => async (dispatch) => (
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/43a4DCrG45arGZobDEJN/books')
    .then((response) => response.json())
    .then((data) => {
      const obj = Object.entries(data);
      const books = obj.map(([item_id, value]) => {
        const [book] = value;
        return { ...book, item_id };
      });
      dispatch({ type: GET_BOOKS, books });
    })
);

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return state.concat(action.books);
    case ADD_BOOK:
      return [...state, {
        ...action.payload,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
