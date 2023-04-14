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

interface IFacts {
  value: string | null;
  type: string | null;
  spoiler: boolean | null;
}

interface IPerson {
  id: number | null;
  photo: string | null;
  name: string | null;
  enName: string | null;
  profession: string | null;
  enProfession: string | null;
}

interface ITrailer {
  url: string | null;
  name: string | null;
  site: string | null;
}

interface ISimilarMovie {
  id: number | null;
  name: string | null;
  enName: string | null;
  alternativeName: string | null;
  poster: {
    url: string | null;
    previewUrl: string | null;
  } | null;
}

interface IFee {
  world: {
    value: number | null;
    currency: string | null;
  };
  russia: {
    value: number | null;
    currency: string | null;
  };
  usa: {
    value: number | null;
    currency: string | null;
  };
}

interface IMovieById extends IMovie {
  collections: Array<string> | null;
  createdAt: string | null;
  facts: Array<IFacts> | null;
  persons: Array<IPerson> | null;
  productionCompanies: Array<string> | null;
  ratingMpaa: string;
  seasonsInfo: Array<string> | null;
  sequelsAndPrequels: Array<string> | null;
  similarMovies: Array<ISimilarMovie> | null;
  slogan: string | null;
  spokenLanguages: string | null;
  technology: {
    hasImax: boolean | null;
    has3D: boolean | null;
  } | null;
  ticketsOnSale: boolean | null;
  typeNumber: number | null;
  updatedAt: string | null;
  videos: {
    trailers: Array<ITrailer> | null;
    teasers: Array<string>;
  } | null;
  premiere: {
    country: string | null;
    world: string | null;
    russia: string | null;
    cinema: string | null;
    dvd: string | null;
  } | null;
  fees: IFee | null;
  budget: object | null;
  ageRating: number | null;
  backdrop: {
    url: string | null;
    previewUrl: string | null;
  } | null;
  status: number | null;
  top10: number | null;
  top250: number | null;
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

interface IErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

export { IMovie, IMovies, IMovieById, ICritique, IErrorResponse };
