import Movies from '../../containers/Movies/Movies';
import React from 'react';
import { Content } from '../../constants/common.constants';
import classes from './Main.module.scss';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <h2 className={classes.greeting}>{Content.greeting}</h2>
        <Movies />
      </main>
    );
  }
}
