import { IMovieById } from '../../types/interfaces';
import AlertErrorMessage from '../../components/AlertMessage/AlertMessage';
import notFoundImg from '../../assets/image-not-found.jpg';
import {
  Content,
  DefaultValuesCard,
  DefaultValuesDescription,
  StarIcon,
} from '../../constants/common.constants';
import classes from './ModalCard.module.scss';
import { useEffect } from 'react';

interface IModalCardProps {
  card: IMovieById | null;
  errorMessage: string | null;
  closeModalCard: () => void;
}

const ModalCard = ({ card, errorMessage, closeModalCard }: IModalCardProps): JSX.Element => {
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
              {movieLength || DefaultValuesCard}
              {Content.duration}
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
              {year || ' '}
            </p>
            <p className={''}>
              <b>{Content.country}</b>
              {...countriesArray.map((country, index) =>
                index !== countriesArray.length - 1 ? `${country.name}, ` : `${country.name}`
              )}
              {countriesArray.length !== 0 || DefaultValuesCard}
            </p>
            <p className={classes.rating}>
              <b>{Content.rating}</b>
              {`${rating?.imdb} ${StarIcon}` || DefaultValuesCard}
            </p>
          </div>
        </div>
        <p className={classes.description}>{description || DefaultValuesDescription}</p>
      </div>
    );
  }

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // });

  const closeModal = (): void => {
    closeModalCard();
  };

  return (
    <>
      <div className={classes.modalCardWrapper} onClick={closeModal}></div>
      {errorMessage && (
        <div className={classes.errorMessageCard}>
          <div className={classes.closeModalButton} onClick={closeModal}>
            <span className={classes.closeLine}></span>
            <span className={classes.closeLine}></span>
          </div>
          <AlertErrorMessage message={errorMessage as string} />
        </div>
      )}
      {card && (
        <div className={classes.modalContainer}>
          <div className={classes.closeModalButton} onClick={closeModal}>
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
