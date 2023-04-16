import Form from '../../components/Form/Form';
import { Content } from '../../constants/common.constants';
import ListCritiques from '../../containers/ListCritiques/ListCritiques';
import { useAppSelector } from '../../hooks/redux';
import classes from './Critiques.module.scss';

const SendMessage = 'Спасибо. Ваша рецензия отправлена';

const Critiques = () => {
  const { showSendMessage } = useAppSelector((state) => state.critiquesReducer);

  return (
    <main>
      <h2>{Content.critiquesTitle}</h2>
      {showSendMessage && <div className={classes.sendMessage}>{SendMessage}</div>}
      <Form />
      <ListCritiques />
    </main>
  );
};

export default Critiques;
