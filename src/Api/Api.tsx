import { IErrorResponse, IMovie, IMovieById, IMovies } from '../types/interfaces';

const Headers = {
  key: 'X-API-KEY',
};

const ApiKey = '76HP0HF-JE0MXDF-G52ZG6R-M0VGAA7';

const ResponseStatus = {
  ok: 200,
};

export const Url = {
  allMovies: 'https://api.kinopoisk.dev/v1/movie?name=',
  movie: 'https://api.kinopoisk.dev/v1/movie/',
};

class Api {
  public static async getMovies(text: string): Promise<IMovie[] | null | string> {
    try {
      const response = await fetch(`${Url.allMovies}${text}`, {
        headers: {
          [Headers.key]: ApiKey,
        },
      });

      if (response.status === ResponseStatus.ok) {
        const movies: IMovies = await response.json();
        return movies.docs;
      }

      const data: IErrorResponse = await response.json();

      throw new Error(data.message);
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }

      return null;
    }
  }
  public static async getMovieById(id: string): Promise<IMovieById | null | string> {
    try {
      const response = await fetch(`${Url.movie}${id}`, {
        headers: {
          [Headers.key]: ApiKey,
        },
      });

      if (response.status === ResponseStatus.ok) {
        const movie: IMovieById = await response.json();
        return movie;
      }

      const data: IErrorResponse = await response.json();

      throw new Error(data.message);
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }

      return null;
    }
  }
}

export default Api;
