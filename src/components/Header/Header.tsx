import { Pages, Paths } from '../../constants/common.constants';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to={Paths.main}>{Pages.main}</Link>
            </li>
            <li>
              <Link to={Paths.about}>{Pages.about}</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
