import { Content } from '../../constants/common.constants';
import { IMovie } from '../../types/interfaces';
import classes from './ItemMovie.module.scss';

interface IItemMoviesProps {
  key: number;
  movie: IMovie;
  text: string;
}

const ItemMovie = (props: IItemMoviesProps) => {
  const foundMovie = (movie: IMovie): boolean => {
    const { name, year, countries, rating } = movie;
    const text = props.text;

    const movieFound =
      !name.includes(text) &&
      !year.toString().includes(text) &&
      !rating.toString().includes(text) &&
      countries.filter((country) => country.name.includes(text)).length === 0;
    return !movieFound;
  };

  const { name, poster, year, countries, rating } = props.movie;

  if (!foundMovie(props.movie)) {
    return <></>;
  }

  return (
    <div className={classes.item}>
      <img src={poster}></img>
      <div className={classes.description}>
        <span className={classes.title}>{name}</span>
        <p className={classes.country}>
          {year} |{' '}
          {...countries.map((country, index) =>
            index !== countries.length - 1 ? `${country.name}, ` : `${country.name}`
          )}
        </p>
        <div className={classes.ratingWrapper}>
          <span className={classes.rating}>
            {Content.rating}
            {rating}
          </span>
          <div className={classes.like}>&#9825;</div>
        </div>
      </div>
    </div>
  );
};

export default ItemMovie;
