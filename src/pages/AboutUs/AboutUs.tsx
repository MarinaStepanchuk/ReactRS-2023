import { Content } from '../../constants/common.constants';
import classes from './AboutUs.module.scss';

const AboutUs = (): JSX.Element => {
  return <p className={classes.about}>{Content.about}</p>;
};

export default AboutUs;
