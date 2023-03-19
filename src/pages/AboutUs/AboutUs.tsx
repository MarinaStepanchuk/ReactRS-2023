import React from 'react';
import { Content } from '../../constants/common.constants';
import classes from './AboutUs.module.scss';

class AboutUs extends React.Component {
  public render(): JSX.Element {
    return <p className={classes.about}>{Content.about}</p>;
  }
}

export default AboutUs;
