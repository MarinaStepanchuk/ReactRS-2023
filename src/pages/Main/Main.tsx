import Movies from '../../containers/Movies/Movies';
import { Content } from '../../constants/common.constants';
import classes from './Main.module.scss';

const Main = (): JSX.Element => {
  return (
    <main>
      <h2 className={classes.greeting}>{Content.greeting}</h2>
      <Movies />
    </main>
  );
};

export default Main;
