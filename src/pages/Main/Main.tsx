import Movies from '../../containers/Movies/Movies';
import React from 'react';
import { Pages } from '../../constants/common.constants';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <h1>{Pages.main}</h1>
        <Movies />
      </main>
    );
  }
}
