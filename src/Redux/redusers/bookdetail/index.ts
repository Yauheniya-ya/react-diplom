import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface BookDetailState {
  
  bookD: any[] 
  loading: boolean
  error: string
}

const initialState: BookDetailState = {
  bookD: [] ,
  loading: false,
  error: ''
}

export const bookDetailSlice = createSlice({
  name: 'bookdetail',
  initialState,
  reducers: {
    bookdetailFetching(state) {
      state.loading = true
    },
    bookdetailFetchingSuccess(state, action: PayloadAction<any[]>) {
      state.loading = false
      state.error = ''
      state.bookD = action.payload
    },
    bookdetailFetchingError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    }
    
  }
})
const reducer = bookDetailSlice.reducer;
export default reducer;
