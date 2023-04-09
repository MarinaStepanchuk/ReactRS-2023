import {
  Content,
  StarIcon,
  DefaultValuesCard,
  ApiErrorMessage,
} from '../../constants/common.constants';
import { IMovie, IMovieById } from '../../types/interfaces';
import notFoundImg from '../../assets/image-not-found.jpg';
import ModalCard from '../../components/ModalCard/ModalCard';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import Api from '../../Api/Api';
import classes from './ItemMovie.module.scss';
import Preloader from '../../components/icons/Preloader/Preloader';

interface IItemMoviesProps {
  key: number;
  movie: IMovie;
}

const ItemMovie = ({ movie }: IItemMoviesProps): JSX.Element | null => {
  const { id, name, poster, year, countries, rating } = movie;
  const [showModal, setShowModal] = useState(false);
  const [movieDetail, setMovieDetail] = useState<IMovieById | null>(null);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [showPreloader, setShowPreloader] = useState(false);

  const countriesArray = countries ? countries : [];

  const getMovieDetails = async (id: string): Promise<void> => {
    setShowPreloader(true);
    const data = await Api.getMovieById(id);

    if (!data) {
      setShowPreloader(false);
      setErrorMessage(ApiErrorMessage.unknownError);
      return;
    }

    if (typeof data === 'string') {
      setShowPreloader(false);
      setErrorMessage(data);
      return;
    }

    setMovieDetail(data);
    setShowPreloader(false);
  };

  const showModalCard = (e: React.MouseEvent<HTMLDivElement>): void => {
    const targetElement = e.target as HTMLElement;
    if (targetElement.closest(`.${classes.item}`)) {
      getMovieDetails(e.currentTarget.id);
      setShowModal(true);
    }
  };

  const closeModalCard = (): void => {
    setShowModal(false);
  };

  return (
    <>
      {showPreloader && createPortal(<Preloader />, document.body)}
      <div className={classes.item} onClick={showModalCard} id={`${id}`}>
        {showModal &&
          createPortal(
            <ModalCard
              card={movieDetail}
              errorMessage={errorMessage}
              closeModalCard={closeModalCard}
            />,
            document.body
          )}
        <img src={poster?.url || notFoundImg}></img>
        <div className={classes.description}>
          <span className={classes.title}>{name}</span>
          <span>
            {Content.year}
            {year || ' '}
          </span>
          <span className={classes.countries}>
            {Content.country}
            {...countriesArray.map((country, index) =>
              index !== countriesArray.length - 1 ? `${country.name}, ` : `${country.name}`
            )}
            {countriesArray.length !== 0 || DefaultValuesCard}
          </span>
          <span className={classes.rating}>
            {Content.rating}
            {`${rating?.imdb} ${StarIcon}` || DefaultValuesCard}
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemMovie;
