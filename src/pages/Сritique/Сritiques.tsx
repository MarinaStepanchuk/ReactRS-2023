import ListData from '../../containers/ListCritiques/ListCritiques';
import Form from '../../components/Form/Form';
import { Content } from '../../constants/common.constants';
import classes from './Main.module.scss';
import React from 'react';

class DataCollector extends React.Component {
  public render(): JSX.Element {
    return (
      <main>
        <h2 className={classes.greeting}>{Content.greeting}</h2>
        <Form />
        <ListData />
      </main>
    );
  }
}

export default DataCollector;
