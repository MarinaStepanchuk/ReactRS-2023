import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import defaultMoviesState from '../../constants/defaultStateMovies';
import ListMovies from '../ListMovies/ListMovies';
import { LocalStorageKeys } from '../../constants/common.constants';

const Movies = (): JSX.Element => {
  const movies = defaultMoviesState;
  const [text, setText] = useState(localStorage.getItem(LocalStorageKeys.search) || '');

  const handleTextChange = (text: string): void => {
    localStorage.setItem(LocalStorageKeys.search, `${text}`);
    setText(text);
  };

  return (
    <section>
      <SearchBar text={text} onTextChange={handleTextChange} />
      <ListMovies text={text} movies={movies} />
    </section>
  );
};

export default Movies;
