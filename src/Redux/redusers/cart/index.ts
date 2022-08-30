import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../models";
import { RootState } from "../../store";

type InitialStateType = {
  
  cart: any[];
 
}; 

const initialState: InitialStateType = {
  cart: [],
 
  
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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
    setBookToCart,
  removeBookFromCart,
  removeAllBooksFromCart
} = cartSlice.actions;

const reducer = cartSlice.reducer;

export default reducer;

export const CartSelectors = {
  
  getCartBooks: (state: RootState) => state.cart,
  
};

