import { IMovie } from '../../types/interfaces';
import ItemMovie from '../../components/ItemMovie/ItemMovie';
import classes from './ListMovies.module.scss';

interface IListMoviesProps {
  movies: IMovie[];
}

const ListMovies = ({ movies }: IListMoviesProps): JSX.Element => (
  <div className={classes.list}>
    {movies.map((movie) => (
      <ItemMovie key={movie.id} movie={movie} />
    ))}
  </div>
);

export default ListMovies;
