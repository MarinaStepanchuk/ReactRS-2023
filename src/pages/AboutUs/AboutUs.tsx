import React from 'react';
import { Content } from '../../constants/common.constants';
import classes from './AboutUs.module.scss';

export default class AboutUs extends React.Component {
  render() {
    return <p className={classes.about}>{Content.about}</p>;
  }
}
