import { Pages, Paths } from '../../constants/common.constants';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import classes from './Header.module.scss';

const Header = (): JSX.Element => {
  const page = useLocation().pathname;
  const foundTitle = (page: string) => {
    let titlePage;
    switch (page) {
      case Paths.main.path:
        titlePage = Paths.main.title;
        break;
      case Paths.about.path:
        titlePage = Paths.about.title;
        break;
      case Paths.critiques.path:
        titlePage = Paths.critiques.title;
        break;
      default:
        titlePage = Paths.main.title;
    }

    return titlePage;
  };

  const [title, setTitle] = useState<string>(foundTitle(page));

  const changeTitle = (page: string) => () => setTitle(page);

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${classes.activeLink}` : `${classes.link}`)}
              to={Paths.main.path}
              onClick={changeTitle(Paths.main.title)}
            >
              {Pages.main}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${classes.activeLink}` : `${classes.link}`)}
              to={Paths.about.path}
              onClick={changeTitle(Paths.about.title)}
            >
              {Pages.about}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${classes.activeLink}` : `${classes.link}`)}
              to={Paths.critiques.path}
              onClick={changeTitle(Paths.critiques.title)}
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
