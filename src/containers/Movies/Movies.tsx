import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import defaultMoviesState from '../../constants/defaultStateMovies';
import ListMovies from '../ListMovies/ListMovies';
import IMovie from '../../interfaces/interfaces';
import { LocalStorageKeys } from '../../constants/common.constants';

interface IListMoviesProps {
  movies: IMovie[];
  text: string;
}

class Movies extends React.Component<object, IListMoviesProps> {
  public state;

  constructor(public props: object) {
    super(props);
    this.state = {
      movies: defaultMoviesState,
      text: localStorage.getItem(LocalStorageKeys.search) || '',
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  private saveText(): void {
    localStorage.setItem(LocalStorageKeys.search, `${this.state.text}`);
  }

  public componentDidMount(): void {
    window.addEventListener('beforeunload', this.saveText);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('beforeunload', this.saveText);
  }

  componentDidUpdate() {
    localStorage.setItem(LocalStorageKeys.search, this.state.text);
  }

  private handleTextChange(text: string): void {
    this.setState({
      text: text,
    });
  }

  public render(): JSX.Element {
    return (
      <section>
        <SearchBar text={this.state.text} onTextChange={this.handleTextChange} />
        <ListMovies text={this.state.text} movies={this.state.movies} />
      </section>
    );
  }
}

export default Movies;
