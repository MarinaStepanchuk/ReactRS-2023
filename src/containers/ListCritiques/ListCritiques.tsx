import ItemCritique from '../../components/ItemCritique/ItemCritique';
import { useAppSelector } from '../../hooks/redux';
import classes from './ListCritiques.module.scss';

const ListCritiques = (): JSX.Element => {
  const { cards } = useAppSelector((state) => state.critiquesReducer);

  return (
    <div className={classes.list}>
      {cards.map((critique) => (
        <ItemCritique key={critique.name} {...critique} />
      ))}
    </div>
  );
};

export default ListCritiques;
