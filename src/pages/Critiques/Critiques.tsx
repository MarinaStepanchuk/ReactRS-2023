import { useState } from 'react';
import Form from '../../components/Form/Form';
import { Content } from '../../constants/common.constants';
import ListCritiques from '../../containers/ListCritiques/ListCritiques';
import { ICritique } from '../../types/interfaces';
import classes from './Critiques.module.scss';

const SendMessage = 'Спасибо. Ваша рецензия отправлена';

const Critiques = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [reviews, setReviews] = useState<ICritique[]>([]);

  const sendReview = (card: ICritique): void => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
      setReviews([...reviews, card]);
    }, 1000);
  };

  return (
    <main>
      <h2>{Content.critiquesTitle}</h2>
      {showMessage && <div className={classes.sendMessage}>{SendMessage}</div>}
      <Form onSubmit={sendReview} />
      <ListCritiques critiques={reviews} />
    </main>
  );
};

export default Critiques;
