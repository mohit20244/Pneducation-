import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
}; 

const authSlice = createSlice({ ///3 part hote hai name,initialState,reducers
  name: "authSlice",
  initialState,
  reducers: {  //mutipal action hote hai
   userLoggedIn: (state, action) => {
    state.user = action.payload.user;
      state.isAuthenticated = true;

       
    },
    userLoggedOut:(state) => {
      state.user = null;
      state.isAuthenticated = false;

       
    }
  },
});
export const {userLoggedIn, userLoggedOut} = authSlice.actions;
export default authSlice.reducer;