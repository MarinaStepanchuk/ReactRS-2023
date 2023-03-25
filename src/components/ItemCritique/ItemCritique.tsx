import { Content } from '../../constants/common.constants';
import React from 'react';
import { ICritique } from '../../types/interfaces';
import classes from './ItemCritique.module.scss';

class ItemCritique extends React.Component<{ critique: ICritique }> {
  public render(): JSX.Element | undefined {
    const { name, country, photo, date, movie, review, recommended } = this.props.critique;

    return (
      <div className={classes.item}>
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
            <span>{movie}</span>
          </div>
          <div className={classes.critiqueItem}>
            <span>{Content.critique.cardDate}</span>
            <span>{date}</span>
          </div>
          <div className={classes.critiqueItem}>
            <span>{Content.critique.cardRecommended}</span>
            <span>
              {recommended
                ? Content.critique.recommendedMovie
                : Content.critique.unrecommendedMovie}
            </span>
          </div>
          <div className={`${classes.critiqueItem} ${classes.reviewContainer}`}>
            <span>{Content.critique.cardReview}</span>
            <span>{review}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCritique;
