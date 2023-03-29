import { IMovie } from '../../types/interfaces';
import ItemMovie from '../../components/ItemMovie/ItemMovie';
import classes from './ListMovies.module.scss';

interface IListMoviesProps {
  text: string;
  movies: IMovie[];
}

const ListMovies = (props: IListMoviesProps) => {
  return (
    <div className={classes.list}>
      {props.movies.map((movie) => (
        <ItemMovie text={props.text} key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default ListMovies;
