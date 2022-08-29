// import { createSlice, PayloadAction } from "@reduxjs/toolkit"



// const LS_FAV_KEY = 'rfk'

// type InitialStateType ={
   
//     favourites: string[]
  
// }

// const initialState :InitialStateType ={
  
//   favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),

// }


// export const favouritesSlice = createSlice({
//     name :'favourites',
//     initialState,
//     reducers:{
    
        
       
//     addFavourite(state, action: PayloadAction<string>) {
//             state.favourites.push(action.payload)
//             localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
//           },
//     removeToFavourite(state, action: PayloadAction<string>) {
//             state.favourites = state.favourites.filter(f => f !== action.payload)
//             localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
//           }
        
//     }
// })


// export const favouritesActions = favouritesSlice.actions
// export const favouritesReduser = favouritesSlice.reducer

