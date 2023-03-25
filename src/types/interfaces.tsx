interface IMovie {
  id: number;
  name: string;
  countries: { name: string }[];
  year: number;
  poster: string;
  rating: number;
}

interface ICritique {
  name: string;
  country: string;
  photo: string;
  date: string;
  movie: string;
  review: string;
  recommended: boolean;
  unrecommended: boolean;
  personal: boolean;
}

export { IMovie, ICritique };
