import classes from './AlertMessage.module.scss';

const AlertErrorMessage = ({ message }: { message: string }): JSX.Element => (
  <div className={classes.alertMessage} data-cy="alert-message">
    {message}
  </div>
);

export default AlertErrorMessage;
