import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IBook } from "../../models"
import { RootState } from "../store"



interface BookState{
    loading : boolean
    error: string
    count:number
    books:IBook[]
    
}
const initialState: BookState = {
    loading: false,
    error: '',
    books: [],
    count: 0
}

export const searchSlice = createSlice({
    name :'search',
    initialState,
    reducers:{
        getSearchBooks: (state, action: PayloadAction<undefined>) => {}, 
        setSearchLoadingBooks: (state, action: PayloadAction<boolean>) => {
          state.loading = action.payload;
        },
        setSearchBooks: (state, action: PayloadAction<any[]>) => {
          state.books = action.payload;
        },
    }
})
export const {
    getSearchBooks,
    setSearchLoadingBooks,
    setSearchBooks
  } = searchSlice.actions;
export default searchSlice.reducer
export const SearchSelectors = {
    getSearchBooks:  (state: RootState) => state.search.books,
    setSearchLoadingBooks:(state: RootState) => state.search.loading,
    
}