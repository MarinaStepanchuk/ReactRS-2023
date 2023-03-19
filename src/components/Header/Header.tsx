import { Pages, Paths } from '../../constants/common.constants';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.activeLink}` : `${classes.link}`
                }
                to={Paths.main}
              >
                {Pages.main}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.activeLink}` : `${classes.link}`
                }
                to={Paths.about}
              >
                {Pages.about}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
