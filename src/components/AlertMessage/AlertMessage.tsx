import classes from './AlertMessage.module.scss';

const AlertErrorMessage = ({ message }: { message: string }): JSX.Element => (
  <div className={classes.alertMessage}>{message}</div>
);

export default AlertErrorMessage;
