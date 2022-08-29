import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../models";
import { RootState } from "../../store";




type InitialStateType = {
  booksList: any[];
  selectedBook: IBook | null;
  isBooksLoading: boolean;
  selectedBookLoading: boolean;
  favBooksList: any[];
  cart: any[];
}; 

const initialState: InitialStateType = {
  booksList: [],
  selectedBook: null,
  isBooksLoading: false,
  selectedBookLoading: false,
  favBooksList: [],
  cart: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks: (state, action: PayloadAction<undefined>) => {}, //=== fetch process from BE
    setLoadingBooks: (state, action: PayloadAction<boolean>) => {
      state.isBooksLoading = action.payload;
    },
    setBooks: (state, action: PayloadAction<any[]>) => {
      state.booksList = action.payload;
    },
    setSelectedBook: (state: any, action: any) => {
      state.selectedBook = action.payload;
    },
    setSelectedBookLoading: (state: any, action: any) => {
      state.isSelectedBookLoading = action.payload;
    },
    setFavBooks: (state: any, action: any) => {
      state.favBooksList.push(action.payload);
    },
    removeBookFromFav: (state, action: PayloadAction<any>) => {
      state.favBooksList = state.favBooksList.filter(
        (book) => book.isbn13 !== action.payload
      );
    },
    setBookToCart: (state, action: PayloadAction<IBook>) => {
      state.cart.push(action.payload);
    },
    removeBookFromCart: (state, action: PayloadAction<any>) => {
      state.cart = state.cart.filter(
        (book) => book.isbn13 !== action.payload
      );
    },
    removeAllBooksFromCart: (state) => {
      state.cart = initialState.cart;
    },
  },
});

export const {
  getBooks,
  setLoadingBooks,
  setBooks,
  setSelectedBook,
  setSelectedBookLoading,
  setFavBooks,
  setBookToCart,
  removeBookFromFav,
  removeBookFromCart,
  removeAllBooksFromCart
} = booksSlice.actions;

const reducer = booksSlice.reducer;

export default reducer;

export const BooksSelectors = {
  getBooks: (state: RootState) => state.books.booksList,
  getBooksLoading: (state: RootState) => state.books.isBooksLoading,
  getAllBooks: (state: RootState) => state.books.booksList,
  getSelectedBook: (state: RootState) => state.books.selectedBook,
  getSelectedBookLoading: (state: RootState) => state.books.selectedBookLoading,
  getFavBooks: (state: RootState) => state.books.favBooksList,
  getCartBooks: (state: RootState) => state.books.cart,
  
};

