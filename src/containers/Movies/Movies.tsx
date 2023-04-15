import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ListMovies from '../ListMovies/ListMovies';
import { ApiErrorMessage, LocalStorageKeys } from '../../constants/common.constants';
import Api from '../../Api/Api';
import { IMovie } from 'types/interfaces';
import Preloader from '../../components/icons/Preloader/Preloader';
import AlertErrorMessage from '../../components/AlertMessage/AlertMessage';

const Movies = (): JSX.Element => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [showPreloader, setShowPreloader] = useState(true);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [text] = useState(localStorage.getItem(LocalStorageKeys.search) || '');

  const showErrorMessage = (message: string) => {
    setShowPreloader(false);
    setErrorMessage(message);
  };

  useEffect(() => {
    setMovies([]);
    setErrorMessage(null);
    setShowPreloader(true);
    const fetchData = async (): Promise<void> => {
      const data = await Api.getMovies(text);

      if (typeof data === 'string') {
        showErrorMessage(data);
      }

      if (!data) {
        showErrorMessage(ApiErrorMessage.unknownError);
      }

      if (data instanceof Array) {
        if (!data.length) {
          showErrorMessage(`${ApiErrorMessage.notFound} "${text}"`);
        }

        setMovies(data);
        setShowPreloader(false);
      }
    };

    fetchData();
  }, [text]);

  return (
    <section>
      <SearchBar />
      {showPreloader && <Preloader />}
      {errorMessage && <AlertErrorMessage message={errorMessage} />}
      <ListMovies movies={movies} />
    </section>
  );
};

export default Movies;
