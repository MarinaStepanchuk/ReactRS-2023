import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovies, IMovieById } from '../../types/interfaces';

const Headers = {
  key: 'X-API-KEY',
};

const ApiKey = 'XFCTYZY-KV54FTB-G3S8DXX-35JACXA';

const baseUrl = 'https://api.kinopoisk.dev/v1/movie';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getMovies: build.query<IMovies, string>({
      query: (text) => ({
        url: '',
        params: {
          name: text,
        },
        headers: {
          [Headers.key]: ApiKey,
        },
      }),
    }),
    getMovieById: build.query<IMovieById, string>({
      query: (id) => ({
        url: `/${id}`,
        headers: {
          [Headers.key]: ApiKey,
        },
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = moviesApi;
