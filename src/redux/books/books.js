const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    category: 'Action',
    name: 'The hunger games',
    author: 'Suzane Collins',
  },
  {
    id: 2,
    category: 'Science Fiction',
    name: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    category: 'Economy',
    name: 'Capital in the Twenty-First Century',
    author: 'Suzzane Collins',
  },
];

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
