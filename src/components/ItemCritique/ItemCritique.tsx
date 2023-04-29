import { Content } from '../../constants/common.constants';
import { ICritique } from '../../types/interfaces';
import classes from './ItemCritique.module.scss';

const ItemCritique = ({
  name,
  country,
  photo,
  date,
  movie,
  review,
  recommended,
}: ICritique): JSX.Element => (
  <div data-testid="itemCritique" className={classes.item}>
    <div className={classes.user}>
      <img src={photo}></img>
      <div className={classes.userInfo}>
        <span>{name}</span>
        <span>{country}</span>
      </div>
    </div>
    <div className={classes.critique}>
      <div className={classes.critiqueItem}>
        <span>{Content.critique.cardMovie}</span>
        <span data-cy="critique-movie">{movie}</span>
      </div>
      <div className={classes.critiqueItem}>
        <span>{Content.critique.cardDate}</span>
        <span>{date}</span>
      </div>
      <div className={classes.critiqueItem}>
        <span>{Content.critique.cardRecommended}</span>
        <span>
          {recommended ? Content.critique.recommendedMovie : Content.critique.unrecommendedMovie}
        </span>
      </div>
      <div className={`${classes.critiqueItem} ${classes.reviewContainer}`}>
        <span>{Content.critique.cardReview}</span>
        <span>{review}</span>
      </div>
    </div>
  </div>
);

export default ItemCritique;
