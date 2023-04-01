import React from 'react';
import { Pages } from '../../constants/common.constants';

class Error extends React.Component {
  public render(): JSX.Element {
    return <h1>{Pages.error}</h1>;
  }
}

export default Error;
