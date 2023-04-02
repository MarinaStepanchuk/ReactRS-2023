import { IMovie } from '../../types/interfaces';
import ItemMovie from '../../components/ItemMovie/ItemMovie';
import classes from './ListMovies.module.scss';

interface IListMoviesProps {
  text: string;
  movies: IMovie[];
}

const ListMovies = ({ text, movies }: IListMoviesProps): JSX.Element => (
  <div className={classes.list}>
    {movies.map((movie) => (
      <ItemMovie text={text} key={movie.id} movie={movie} />
    ))}
  </div>
);

export default ListMovies;
