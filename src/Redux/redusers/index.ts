import { combineReducers } from "@reduxjs/toolkit";

import booksReducer from "./book";
import cartReducer from "./cart";
import userReducer from "./user";
// import { favouritesReduser } from "./favorites";
import  searchReducer  from './search';
import bookDetailReducer  from "./bookdetail/index";


const rootReducer = combineReducers({
  books: booksReducer,
  cart: cartReducer,
  user: userReducer,
  // favourites:favouritesReduser,
  search:searchReducer,
  bookdetail:bookDetailReducer,
  });

export default rootReducer;


export type RootState = ReturnType<typeof rootReducer>

