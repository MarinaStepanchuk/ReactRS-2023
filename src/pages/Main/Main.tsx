import Movies from '../../containers/Movies/Movies';
import React from 'react';
import { Content } from '../../constants/common.constants';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <h2>{Content.greeting}</h2>
        <Movies />
      </main>
    );
  }
}
