import { Pages, Paths } from '../../constants/common.constants';
import { NavLink } from 'react-router-dom';
import getRouteTitle from '../../utils/getRouteTitle';
import classes from './Header.module.scss';
import { useState } from 'react';

const Header = () => {
  const [title, setTitle] = useState(getRouteTitle());

  const changeTitle = (page: string): void => {
    setTitle(page);
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${classes.activeLink}` : `${classes.link}`)}
              to={Paths.main.path}
              onClick={() => changeTitle(Paths.main.title)}
            >
              {Pages.main}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${classes.activeLink}` : `${classes.link}`)}
              to={Paths.about.path}
              onClick={() => changeTitle(Paths.about.title)}
            >
              {Pages.about}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${classes.activeLink}` : `${classes.link}`)}
              to={Paths.critiques.path}
              onClick={() => changeTitle(Paths.critiques.title)}
            >
              {Pages.critiques}
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
