import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  //this object contains the slices of the redux store
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**create store using createStore
 * configureStore () from redux toolkit
 *
 * provide my store to app
 * <provide store={store}> import from react redux
 *
 * slice
 * create slice using createSlice( ) import from redux toolkit
 * createSlice({
 * name:"",
 * initialState:
 * reducers:{
 * this contains all action and reducers function corresponding to them
 *
 * addItems:(state,action)=>{  state = action.payload
 * 
 * }

 * }})
 *how to export our reducer
 *
 * 
 * export const{addItem,removeItem}= cartSlice.actions; 
 * export default cartSlice.reducer;'
 * 
 * 
 * Put that slice into store
 * 
 *          -{
 *          reducer :{
 *          cart:cartSlice,
 *          
 * 
 * 
 *      }        
 *  
 * 
 *  }
 * */
