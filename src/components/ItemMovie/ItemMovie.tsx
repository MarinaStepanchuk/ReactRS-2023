import { Content, StarIcon, DefaultValuesCard } from '../../constants/common.constants';
import { IMovie } from '../../types/interfaces';
import notFoundImg from '../../assets/image-not-found.jpg';
import ModalCard from '../../components/ModalCard/ModalCard';
import { createPortal } from 'react-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { showModal } from '../../redux/store/reducers/ModalSlice/modalSlice';
import classes from './ItemMovie.module.scss';

interface IItemMoviesProps {
  key: number;
  movie: IMovie;
}

const ItemMovie = ({ movie }: IItemMoviesProps): JSX.Element | null => {
  const { idCard } = useAppSelector((state) => state.modalReducer);
  const dispatch = useAppDispatch();

  const { id, name, poster, year, countries = [], rating } = movie;

  const countriesArray = countries ? countries : [];

  const showModalWindow = (e: React.MouseEvent<HTMLDivElement>): void => {
    const targetElement = e.target as HTMLElement;

    if (!targetElement.closest(`.${classes.item}`)) {
      return;
    }

    dispatch(showModal(String(id)));
  };

  return (
    <>
      <div className={classes.item} onClick={showModalWindow} id={`${id}`}>
        {idCard === String(id) && createPortal(<ModalCard />, document.body)}
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
