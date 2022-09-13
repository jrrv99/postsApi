import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { PostAdapter, PostUserAdapter, CommentAdapter } from '@adapters';

const reducerPath = 'postsApi';
const baseUrl =
  import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:3004';
const API_ID = import.meta.env.VITE_APP_API_ID;

const postsApi = createApi({
  reducerPath,
  baseQuery: retry(
    fetchBaseQuery(
      {
        baseUrl,
        prepareHeaders: headers => {
          headers.set('app-id', API_ID);
          return headers;
        },
      },
      { maxRetries: 3 }
    )
  ),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/post',
    }),
    getPostsByTag: builder.query({
      query: tagId => `tag/${tagId}/post`,
    }),
    getPostById: builder.query({
      query: postId => `/post/${postId}`,
      transformResponse: PostAdapter,
    }),
    getCommentsByPost: builder.query({
      query: postId => `/post/${postId}/comment`,
      transformResponse: ({ data, ...response }) => ({
        commnets: data.map(comment => CommentAdapter(comment)),
        ...response,
      }),
    }),
    getPostsByUser: builder.query({
      query: userId => `user/${userId}/post`,
    }),
    getUserById: builder.query({
      query: userId => `/user/${userId}`,
      transformResponse: PostUserAdapter,
    }),
  }),
});

const {
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useGetPostsByTagQuery,
  useLazyGetPostsByTagQuery,
  useGetPostByIdQuery,
  useLazyGetPostByIdQuery,
  useGetPostsByUserQuery,
  useLazyGetPostsByUserQuery,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useGetCommentsByPostQuery,
  useLazyGetCommentsByPostQuery,
  reducer: postsReducer,
  middleware: postsMiddleware,
} = postsApi;

export {
  postsApi as default,
  reducerPath,
  postsReducer,
  postsMiddleware,
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useGetPostsByTagQuery,
  useLazyGetPostsByTagQuery,
  useGetPostByIdQuery,
  useLazyGetPostByIdQuery,
  useGetPostsByUserQuery,
  useLazyGetPostsByUserQuery,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useGetCommentsByPostQuery,
  useLazyGetCommentsByPostQuery,
};
