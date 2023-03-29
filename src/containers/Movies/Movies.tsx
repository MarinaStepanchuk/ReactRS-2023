import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import defaultMoviesState from '../../constants/defaultStateMovies';
import ListMovies from '../ListMovies/ListMovies';
import { LocalStorageKeys } from '../../constants/common.constants';

const Movies = (): JSX.Element => {
  const [movies] = useState(defaultMoviesState);
  const [text, setText] = useState(localStorage.getItem(LocalStorageKeys.search) || '');

  const handleTextChange: (text: string) => void = (text: string) => {
    setText(text);
  };

  useEffect(() => {
    localStorage.setItem(LocalStorageKeys.search, `${text}`);
    return () => {
      localStorage.setItem(LocalStorageKeys.search, `${text}`);
    };
  }, [text]);

  return (
    <section>
      <SearchBar text={text} onTextChange={handleTextChange} />
      <ListMovies text={text} movies={movies} />
    </section>
  );
};

export default Movies;
