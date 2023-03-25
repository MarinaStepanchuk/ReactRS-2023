import React from 'react';
import { IMovie } from '../../types/interfaces';
import ItemMovie from '../../components/ItemMovie/ItemMovie';
import classes from './ListMovies.module.scss';

interface IListMoviesProps {
  text: string;
  movies: IMovie[];
}

class ListMovies extends React.Component<IListMoviesProps, object> {
  public render(): JSX.Element {
    return (
      <div className={classes.list}>
        {this.props.movies.map((movie) => (
          <ItemMovie text={this.props.text} key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default ListMovies;
