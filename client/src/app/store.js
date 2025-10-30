import { configureStore } from "@reduxjs/toolkit";
import rootRedcer from "./rootReducer";
import { authApi } from "@/features/api/authApi";
import { courseApi } from "@/features/api/courseApi";

export const store = configureStore({
    reducer:rootRedcer,
    middleware:(defaultMiddleware)=>defaultMiddleware().concat(authApi.middleware,courseApi.middleware)
    
})
const initializeApp = async () => {
  await store.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true})) //object pass karge 
}
initializeApp();