import { combineReducers } from "@reduxjs/toolkit";

import booksReducer from "./book";
// import cartReducer from "./cart";
import userReducer from "./user";
// import { favouritesReduser } from "./favorites";
import bookDetailReducer  from "./bookdetail/index";


const rootReducer = combineReducers({
  books: booksReducer,
  // cart: cartReducer,
  user: userReducer,
  // favourites:favouritesReduser,
  bookdetail:bookDetailReducer,
  });

export default rootReducer;


export type RootState = ReturnType<typeof rootReducer>

