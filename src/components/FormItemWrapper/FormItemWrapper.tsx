import { ReactNode } from 'react';
import classes from './FormItemWrapper.module.scss';

interface IFormItemProps {
  label: string;
  name: string;
  children: ReactNode;
  errorMessage?: string;
  class?: string;
}

const FormItemWrapper = (props: IFormItemProps) => {
  const { label, name, children, errorMessage } = props;

  return (
    <div className={`${classes.formItem} ${props.class ? props.class : ''}`}>
      <div className={classes.inputContainer}>
        <label htmlFor={name}>{label}</label>
        {children}
      </div>
      {props.errorMessage && (
        <p data-testid="errorMessage" className={classes.errorMessage}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormItemWrapper;
