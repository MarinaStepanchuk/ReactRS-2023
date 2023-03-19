import React from 'react';
import { Pages } from '../../constants/common.constants';

export default class Error extends React.Component {
  render() {
    return <h1>{Pages.error}</h1>;
  }
}
