import classes from './Preloader.module.scss';
import PreloaderIcon from '../../../assets/preloader.svg';

const Preloader = (): JSX.Element => (
  <div className={classes.preloader}>
    <PreloaderIcon />
  </div>
);

export default Preloader;
