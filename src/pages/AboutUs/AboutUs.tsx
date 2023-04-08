import { Content } from '../../constants/common.constants';
import classes from './AboutUs.module.scss';

const AboutUs = (): JSX.Element => <p className={classes.about}>{Content.about}</p>;

export default AboutUs;
