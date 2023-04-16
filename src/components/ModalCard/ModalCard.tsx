import AlertErrorMessage from '../../components/AlertMessage/AlertMessage';
import notFoundImg from '../../assets/image-not-found.jpg';
import {
  ApiErrorMessage,
  Content,
  DefaultValuesCard,
  DefaultValuesDescription,
  StarIcon,
} from '../../constants/common.constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { modalSlice } from '../../redux/store/reducers/ModalSlice/modalSlice';
import { useGetMovieByIdQuery } from '../../redux/services/MoviesService';
import Preloader from '../../components/icons/Preloader/Preloader';
import { createPortal } from 'react-dom';
import classes from './ModalCard.module.scss';

const ModalCard = (): JSX.Element => {
  const { idCard } = useAppSelector((state) => state.modalReducer);
  const { closeModal } = modalSlice.actions;
  const dispatch = useAppDispatch();

  const { data: card, isFetching, isError } = useGetMovieByIdQuery(idCard);

  let modal;

  if (card) {
    const { poster, name, rating, movieLength, year, countries, genres, description } = card;

    const countriesArray = countries ? countries : [];

    const genresArray = genres ? genres : [];

    modal = (
      <div className={classes.modal}>
        <p className={classes.title}>{name}</p>
        <div className={classes.detailContainer}>
          <img className={classes.poster} src={poster?.url || notFoundImg}></img>
          <div className={classes.details}>
            <p>
              <b>{Content.movieLength}</b>
              {movieLength ? `${movieLength}${Content.duration}` : DefaultValuesCard}
            </p>
            <p>
              <b>{Content.genres}</b>
              {...genresArray.map((genre, index) =>
                index !== genresArray.length - 1 ? `${genre.name}, ` : `${genre.name}`
              )}
              {genresArray.length !== 0 || DefaultValuesCard}
            </p>
            <p>
              <b>{Content.year}</b>
              {year || DefaultValuesCard}
            </p>
            <p>
              <b>{Content.country}</b>
              {...countriesArray.map((country, index) =>
                index !== countriesArray.length - 1 ? `${country.name}, ` : `${country.name}`
              )}
              {countriesArray.length !== 0 || DefaultValuesCard}
            </p>
            <p className={classes.rating}>
              <b>{Content.rating}</b>
              {rating?.imdb ? `${rating?.imdb} ${StarIcon}` : DefaultValuesCard}
            </p>
          </div>
        </div>
        <p className={classes.description}>{description || DefaultValuesDescription}</p>
      </div>
    );
  }

  const closeModalCard = (): void => {
    dispatch(closeModal());
  };

  return (
    <>
      {isFetching && createPortal(<Preloader />, document.body)}
      <div className={classes.modalCardWrapper} onClick={closeModalCard}></div>
      {isError && (
        <div className={classes.errorMessageCard}>
          <div className={classes.closeModalButton} onClick={closeModalCard}>
            <span className={classes.closeLine}></span>
            <span className={classes.closeLine}></span>
          </div>
          <AlertErrorMessage message={ApiErrorMessage.unknownError} />
        </div>
      )}
      {!isFetching && card && (
        <div className={classes.modalContainer}>
          <div className={classes.closeModalButton} onClick={closeModalCard}>
            <span className={classes.closeLine}></span>
            <span className={classes.closeLine}></span>
          </div>
          {modal}
        </div>
      )}
    </>
  );
};

export default ModalCard;
