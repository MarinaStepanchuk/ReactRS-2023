import { ICritique } from '../../types/interfaces';
import ItemCritique from '../../components/ItemCritique/ItemCritique';
import classes from './ListCritiques.module.scss';

const ListCritiques = ({ critiques }: { critiques: Array<ICritique> }): JSX.Element => (
  <div className={classes.list}>
    {critiques.map((critique) => (
      <ItemCritique key={critique.name} {...critique} />
    ))}
  </div>
);

export default ListCritiques;
