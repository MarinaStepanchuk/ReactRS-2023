export interface IMovie {
  id: number;
  name: string;
  countries: { name: string }[];
  year: number;
  poster: string;
  rating: number;
}
