import { IMovie } from '../../interfaces/interfaces';
import React from 'react';
import ItemMovie from '../../components/ItemMovie/ItemMovie';
import classes from './ListMovies.module.scss';

interface IListMoviesProps {
  text: string;
  movies: IMovie[];
}

export default class ListMovies extends React.Component<IListMoviesProps, object> {
  constructor(props: IListMoviesProps) {
    super(props);
  }

  render() {
    return (
      <div className={classes.list}>
        {this.props.movies.map((movie) => (
          <ItemMovie text={this.props.text} key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}
