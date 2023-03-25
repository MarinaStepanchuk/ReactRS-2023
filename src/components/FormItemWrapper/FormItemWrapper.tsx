import React, { ReactNode } from 'react';
import classes from './FormItemWrapper.module.scss';

interface IFormItemProps {
  label: string;
  children: ReactNode;
  errorMessage?: string;
  class?: string;
}

class FormItemWrapper extends React.Component<IFormItemProps> {
  render(): JSX.Element | undefined {
    return (
      <div className={`${classes.formItem} ${this.props.class ? this.props.class : ''}`}>
        <div className={classes.inputContainer}>
          <label>{this.props.label}</label>
          {this.props.children}
        </div>
        {this.props.errorMessage && (
          <p className={classes.errorMessage}>{this.props.errorMessage}</p>
        )}
      </div>
    );
  }
}

export default FormItemWrapper;
