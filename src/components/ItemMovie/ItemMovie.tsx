import { Content } from '../../constants/common.constants';
import React from 'react';
import { IMovie } from '../../interfaces/interfaces';
import classes from './ItemMovie.module.scss';

interface IItemMoviesProps {
  key: number;
  movie: IMovie;
  text: string;
}

export default class ItemMovie extends React.Component<IItemMoviesProps, object> {
  constructor(props: IItemMoviesProps) {
    super(props);
  }

  render() {
    const { name, poster, year, countries, rating } = this.props.movie;
    const text = this.props.text;

    if (
      !name.includes(text) &&
      !year.toString().includes(text) &&
      !rating.toString().includes(text) &&
      countries.filter((country) => country.name.includes(text)).length === 0
    ) {
      return;
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
  }
}
