import React, { ReactNode } from 'react';
import classes from './FormItemWrapper.module.scss';

interface IFormItemProps {
  label: string;
  name: string;
  children: ReactNode;
  errorMessage?: string;
  class?: string;
}

class FormItemWrapper extends React.Component<IFormItemProps> {
  render(): JSX.Element | undefined {
    const { label, name, children, errorMessage } = this.props;

    return (
      <div className={`${classes.formItem} ${this.props.class ? this.props.class : ''}`}>
        <div className={classes.inputContainer}>
          <label htmlFor={name}>{label}</label>
          {children}
        </div>
        {this.props.errorMessage && (
          <p data-testid="errorMessage" className={classes.errorMessage}>
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
}

export default FormItemWrapper;
