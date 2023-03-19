import React from 'react';
import { Content } from '../../constants/common.constants';
import classes from './AboutUs.module.scss';

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className={classes.greetingContainer}>
        <span className={classes.appName}>{Content.appName}</span>;
        <span className={classes.about}>{Content.about}</span>;
      </div>
    );
  }
}
