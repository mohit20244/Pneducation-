import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COURSE_API = "http://localhost:3000/api/";

export const courseApi = createApi({
  reducerPath: "courseApi",
  tagTypes: ["Refetch_Creator_Course", "Refetch_Lecture"],
  baseQuery: fetchBaseQuery({
    baseUrl: COURSE_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({ //ye return kar raha hai callback function
    createCourse: builder.mutation({
      query: ({ courseTitle, category }) => ({
        url: "createCourse",
        method: "POST",
        body: { courseTitle, category },
      }),
      invalidatesTags: ["Refetch_Creator_Course"],
    }),
    getCreatorCourse: builder.query({
      query: () => ({
        url: "/getCourse",
        method: "GET",
      }),
      providesTags: ["Refetch_Creator_Course"],
    }),
   
  }),
});
export const {
  useCreateCourseMutation,
  useGetCreatorCourseQuery
 
} = courseApi;