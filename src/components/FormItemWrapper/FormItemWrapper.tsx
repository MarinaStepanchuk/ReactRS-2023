import { ReactNode } from 'react';
import classes from './FormItemWrapper.module.scss';

interface IFormItemProps {
  label: string;
  name: string;
  children: ReactNode;
  errorMessage?: string;
  class?: string;
}

const FormItemWrapper = ({
  label,
  name,
  children,
  errorMessage,
  class: extraClass,
}: IFormItemProps): JSX.Element => (
  <div className={`${classes.formItem} ${extraClass ? extraClass : ''}`}>
    <div className={classes.inputContainer}>
      <label htmlFor={name}>{label}</label>
      {children}
    </div>
    {errorMessage && (
      <p data-testid="errorMessage" className={classes.errorMessage}>
        {errorMessage}
      </p>
    )}
  </div>
);

export default FormItemWrapper;
