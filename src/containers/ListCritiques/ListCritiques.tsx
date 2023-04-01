import React from 'react';
import { ICritique } from '../../types/interfaces';
import ItemCritique from '../../components/ItemCritique/ItemCritique';
import classes from './ListCritiques.module.scss';

class ListCritiques extends React.Component<{ critiques: Array<ICritique> }> {
  public render(): JSX.Element {
    return (
      <div className={classes.list}>
        {this.props.critiques.map((critique, index) => (
          <ItemCritique key={index} critique={critique} />
        ))}
      </div>
    );
  }
}

export default ListCritiques;
