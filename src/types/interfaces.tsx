interface INameMovie {
  name: string | null;
  language?: string | null;
  type?: string | null;
}

interface IWatchabilityItem {
  name: string | null;
  logo: {
    url: string | null;
  };
  url: string | null;
}

interface IMovie {
  externalId: {
    kpHD: string | null;
    imdb: string | null;
    tmdb: number | null;
  } | null;
  rating: {
    kp: number | null;
    imdb: number | null;
    filmCritics: number | null;
    russianFilmCritics: number | null;
    await: number | null;
  } | null;
  votes: {
    kp: number | null;
    imdb: number | null;
    filmCritics: number | null;
    russianFilmCritics: number | null;
    await: number | null;
  } | null;
  movieLength: number | null;
  id: number;
  type: string | null;
  name: string | null;
  description: string | null;
  year: number | null;
  poster: {
    url: string | null;
    previewUrl: string | null;
  } | null;
  genres: Array<{ name: string }> | null;
  countries: Array<{ name: string }> | null;
  alternativeName: string | null;
  enName: string | null;
  names: Array<INameMovie> | null;
  shortDescription: string | null;
  logo: {
    url: string | null;
  } | null;
  watchability: {
    items: Array<IWatchabilityItem>;
  } | null;
}

interface IMovies {
  docs: Array<IMovie>;
  total: number;
  limit: number;
  page: number;
  pages: number;
}

interface ICritique {
  name: string;
  country: string;
  photo: string;
  date: string;
  movie: string;
  review: string;
  recommended: boolean;
  personal: boolean;
}

export { IMovie, IMovies, ICritique };
