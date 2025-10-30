import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {userLoggedIn, userLoggedOut} from "../authSlice"

// Backend API base URL
const USER_API = "http://localhost:3000/api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include", // cors ke liye, cookies bhejne ke liye zaruri hai
  }),
  endpoints: (builder) => ({
    // data post ke liye builder mutation ka use karenge
    registerUser: builder.mutation({
      query: (inputData) => ({
        url: "signUp",  // backend ka route
        method: "POST",
        body: inputData,  // input data ko pass karna hai
      }),
    }),
    loginUser: builder.mutation({
      query: (inputData) => ({
        url: "signIn",
        method: "POST",
        body: inputData,
      }),
    }),
    loadUser: builder.query({
      query: () => ({
        url: "getUserProfile",  // backend route se exact match karna chahiye
        method: "GET",
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result.data.user }));
        } catch (error) {
          console.log(error);
        }
      }
    }),
    updateUser: builder.mutation({
            query: (formData) => ({
                url:"updateProfile",
                method:"PUT",
                body:formData,
                credentials:"include"
            })
        }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "logout",
        method: "GET",
      }),
      async onQueryStarted(_, {queryFulfilled, dispatch}) {
          try {
              dispatch(userLoggedOut());
          } catch (error) {
              console.log(error);
          }
      }
    }),    

  }),
});

// RTK query hooks export karenge
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLoadUserQuery,
  useUpdateUserMutation,
  useLogoutUserMutation,
} = authApi;
