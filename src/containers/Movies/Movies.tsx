import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import defaultMoviesState from '../../constants/defaultStateMovies';
import ListMovies from '../ListMovies/ListMovies';
import { LocalStorageKeys } from '../../constants/common.constants';

const Movies = (): JSX.Element => {
  const movies = defaultMoviesState;
  const [text, setText] = useState(localStorage.getItem(LocalStorageKeys.search) || '');

  const handleTextChange = (textV: string): void => {
    setText(textV);
  };

  return (
    <section>
      <SearchBar onTextChange={handleTextChange} />
      <ListMovies text={text} movies={movies} />
    </section>
  );
};

export default Movies;
