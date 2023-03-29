import React from 'react';
import Form from '../../components/Form/Form';
import { Content, ErrorMessages, regName } from '../../constants/common.constants';
import ListCritiques from '../../containers/ListCritiques/ListCritiques';
import { ICritique } from '../../types/interfaces';
import ErrorsObject from '../../types/types';
import classes from './Critiques.module.scss';

interface ICritiquesState {
  reviews: Array<ICritique>;
  shouldClear: boolean;
  errors: ErrorsObject;
  showMessage: boolean;
}

const SendMessage = 'Thanks. The review is saved.';

class Critiques extends React.Component<object, ICritiquesState> {
  constructor(prop: object) {
    super(prop);
    this.state = {
      reviews: [],
      shouldClear: false,
      errors: {},
      showMessage: false,
    };
  }

  private sendReview: (card: ICritique) => void = (card: ICritique) => {
    this.changeReviews(card);
  };

  private changeReviews = (card: ICritique) => {
    const { isValid, errorsObject } = this.isValid(card);

    if (isValid) {
      const copyState = this.state.reviews;
      copyState.push(card);
      this.setState({
        showMessage: true,
        errors: errorsObject,
      });

      setTimeout(() => {
        this.setState({
          reviews: copyState,
          shouldClear: true,
          showMessage: false,
        });
      }, 1000);
    } else {
      this.setState({
        shouldClear: false,
        errors: errorsObject,
      });
    }
  };

  private isValid(card: ICritique): { isValid: boolean; errorsObject: ErrorsObject } {
    const { name, country, photo, movie, date, review, recommended, unrecommended, personal } =
      card;
    const errors: ErrorsObject = {};
    let isValid = false;

    if (!name.length) {
      errors.name = ErrorMessages.emptyLine;
    }

    if (!name.match(regName)) {
      errors.name = ErrorMessages.invalidName;
    }

    if (country === 'default') {
      errors.country = ErrorMessages.emptyLine;
    }

    if (!photo.length) {
      errors.photo = ErrorMessages.missingPhoto;
    }

    if (!movie.length) {
      errors.movie = ErrorMessages.emptyLine;
    }

    if (new Date(date).getTime() > new Date().getTime()) {
      errors.date = ErrorMessages.wrongDate;
    }

    if (!date.length) {
      errors.date = ErrorMessages.emptyLine;
    }

    if (!review.length) {
      errors.review = ErrorMessages.emptyLine;
    }

    if (!recommended && !unrecommended) {
      errors.recommended = ErrorMessages.recommended;
    }

    if (!personal) {
      errors.personal = ErrorMessages.emptyLine;
    }

    if (!Object.keys(errors).length) {
      isValid = true;
    }

    return {
      isValid: isValid,
      errorsObject: errors,
    };
  }

  public render(): JSX.Element {
    return (
      <main>
        <h2>{Content.critiquesTitle}</h2>
        {this.state.showMessage && <div className={classes.sendMessage}>{SendMessage}</div>}
        <Form
          onSubmit={this.sendReview}
          shouldClear={this.state.shouldClear}
          errors={this.state.errors}
        />
        <ListCritiques critiques={this.state.reviews} />
      </main>
    );
  }
}

export default Critiques;
