import { IMovie, IMovieById, IMovies } from '../types/interfaces';

const Headers = {
  key: 'X-API-KEY',
};

const ApiKey = 'XFCTYZY-KV54FTB-G3S8DXX-35JACXA';

const ResponseStatus = {
  ok: 200,
};

const Url = {
  allMovies: 'https://api.kinopoisk.dev/v1/movie?name=',
  movie: 'https://api.kinopoisk.dev/v1/movie/',
};

class Api {
  public static async getMovies(text: string): Promise<IMovie[] | null | undefined | Error> {
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
    } catch (error) {
      if (error instanceof Error) {
        return error;
      }
      return null;
    }
  }
  public static async getMovieById(id: string): Promise<IMovieById | null | undefined | Error> {
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
    } catch (error) {
      if (error instanceof Error) {
        return error;
      }
      return null;
    }
  }
}

export default Api;
