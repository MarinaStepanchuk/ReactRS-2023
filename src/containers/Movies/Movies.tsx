import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { defaultMoviesState } from '../../constants/defaultStateMovies';
import ListMovies from '../ListMovies/ListMovies';
import { IMovie } from '../../interfaces/interfaces';
import { LocalStorageKeys } from '../../constants/common.constants';

interface IListMoviesProps {
  movies: IMovie[];
  text: string;
}

export default class Movies extends React.Component<object, IListMoviesProps> {
  constructor(props: object) {
    super(props);
    this.state = {
      movies: defaultMoviesState,
      text: localStorage.getItem(LocalStorageKeys.search) || '',
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  saveText = () => {
    localStorage.setItem(LocalStorageKeys.search, `${this.state.text}`);
  };

  componentDidMount() {
    window.addEventListener('beforeunload', this.saveText);
  }

  componentWillUnmount(): void {
    window.removeEventListener('beforeunload', this.saveText);
  }

  handleTextChange(text: string) {
    this.setState({
      text: text,
    });
  }

  render() {
    return (
      <section>
        <SearchBar text={this.state.text} onTextChange={this.handleTextChange} />
        <ListMovies text={this.state.text} movies={this.state.movies} />
      </section>
    );
  }
}
