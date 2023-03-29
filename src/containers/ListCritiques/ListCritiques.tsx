import React from 'react';
import { ICritique } from '../../types/interfaces';
import ItemCritique from '../../components/ItemCritique/ItemCritique';
import classes from './ListCritiques.module.scss';

const ListCritiques = (props: { critiques: Array<ICritique> }) => {
  return (
    <div className={classes.list}>
      {props.critiques.map((critique, index) => (
        <ItemCritique key={index} critique={critique} />
      ))}
    </div>
  );
};

export default ListCritiques;
