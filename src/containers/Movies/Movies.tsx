import SearchBar from '../../components/SearchBar/SearchBar';
import ListMovies from '../ListMovies/ListMovies';
import { ApiErrorMessage } from '../../constants/common.constants';
import Preloader from '../../components/icons/Preloader/Preloader';
import AlertErrorMessage from '../../components/AlertMessage/AlertMessage';
import { useGetMoviesQuery } from '../../redux/services/MoviesService';
import { useAppSelector } from '../../hooks/redux';

const Movies = (): JSX.Element => {
  const { searchText } = useAppSelector((state) => state.searchReducer);
  const { data, isFetching, isError } = useGetMoviesQuery(searchText);

  return (
    <section>
      <SearchBar />
      {isFetching && <Preloader />}
      {!isFetching && isError && <AlertErrorMessage message={ApiErrorMessage.unknownError} />}
      {!isFetching && data?.docs.length === 0 && (
        <AlertErrorMessage message={ApiErrorMessage.notFound} />
      )}
      {!isFetching && <ListMovies movies={data?.docs || []} />}
    </section>
  );
};

export default Movies;
