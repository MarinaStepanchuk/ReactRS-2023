import { Content, StarIcon, DefaultValuesCard } from '../../constants/common.constants';
import { IMovie } from '../../types/interfaces';
import notFoundImg from '../../assets/image-not-found.jpg';
import classes from './ItemMovie.module.scss';

interface IItemMoviesProps {
  key: number;
  movie: IMovie;
}

const ItemMovie = ({ movie }: IItemMoviesProps): JSX.Element | null => {
  const { name, poster, year, countries, rating } = movie;

  const countriesArray = countries ? countries : [];

  return (
    <div className={classes.item}>
      <img src={poster?.url || notFoundImg}></img>
      <div className={classes.description}>
        <span className={classes.title}>{name}</span>
        <span>
          {Content.year}
          {year || ' '}
        </span>
        <span className={classes.countries}>
          {Content.country}
          {...countriesArray.map((country, index) =>
            index !== countriesArray.length - 1 ? `${country.name}, ` : `${country.name}`
          )}
          {countriesArray.length !== 0 || DefaultValuesCard.countries}
        </span>
        <span className={classes.rating}>
          {Content.rating}
          {`${rating?.imdb} ${StarIcon}` || DefaultValuesCard.rating}
        </span>
      </div>
    </div>
  );
};

export default ItemMovie;
