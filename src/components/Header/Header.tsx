import { Pages, Paths } from '../../constants/common.constants';
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

const getRouteTitle = () => {
  const url = location.pathname;
  return Object.values(Paths).find((item) => item.path === url)?.title || '';
};

export default class Header extends React.Component<object, { title?: string }> {
  constructor(props: object) {
    super(props);
    this.state = {
      title: getRouteTitle(),
    };
  }

  changeTitle(page: string) {
    this.setState({
      title: page,
    });
  }

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
                to={Paths.main.path}
                onClick={() => this.changeTitle(Paths.main.title)}
              >
                {Pages.main}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.activeLink}` : `${classes.link}`
                }
                to={Paths.about.path}
                onClick={() => this.changeTitle(Paths.about.title)}
              >
                {Pages.about}
              </NavLink>
            </li>
          </ul>
        </nav>
        <h1>{this.state.title}</h1>
      </header>
    );
  }
}
