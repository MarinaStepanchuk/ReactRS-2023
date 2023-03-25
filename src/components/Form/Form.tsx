import { Content, Countries } from '../../constants/common.constants';
import React from 'react';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import classes from '../Form/Form.module.scss';
import { ICritique } from '../../types/interfaces';
import ErrorsObject from '../../types/types';

const ImageFormats = '.jpg,.jpeg,.png';

interface IFormProps {
  onSubmit: (card: ICritique) => void;
  shouldClear: boolean;
  errors?: ErrorsObject;
}

class Form extends React.Component<IFormProps> {
  private form: React.RefObject<HTMLFormElement>;

  private nameRef: React.RefObject<HTMLInputElement>;

  private countryRef: React.RefObject<HTMLSelectElement>;

  private photoRef: React.RefObject<HTMLInputElement>;

  private movieRef: React.RefObject<HTMLInputElement>;

  private dateRef: React.RefObject<HTMLInputElement>;

  private reviewRef: React.RefObject<HTMLTextAreaElement>;

  private recommendedRef: React.RefObject<HTMLInputElement>;

  private unrecommendedRef: React.RefObject<HTMLInputElement>;

  private personalRef: React.RefObject<HTMLInputElement>;

  constructor(prop: IFormProps) {
    super(prop);
    this.form = React.createRef();
    this.nameRef = React.createRef();
    this.countryRef = React.createRef();
    this.photoRef = React.createRef();
    this.movieRef = React.createRef();
    this.dateRef = React.createRef();
    this.reviewRef = React.createRef();
    this.recommendedRef = React.createRef();
    this.unrecommendedRef = React.createRef();
    this.personalRef = React.createRef();
  }

  private submitForm: React.MouseEventHandler<HTMLButtonElement> = () => {
    const card = {
      name: this.extractStringValue(this.nameRef),
      country: this.extractStringValue(this.countryRef),
      photo: this.extractStringValue(this.photoRef),
      date: this.extractStringValue(this.dateRef),
      movie: this.extractStringValue(this.movieRef),
      review: this.extractStringValue(this.reviewRef),
      recommended: this.extractCheckValue(this.recommendedRef),
      unrecommended: this.extractCheckValue(this.unrecommendedRef),
      personal: this.extractCheckValue(this.personalRef),
    };

    this.props.onSubmit(card);
  };

  private extractStringValue(
    ref:
      | React.RefObject<HTMLInputElement>
      | React.RefObject<HTMLSelectElement>
      | React.RefObject<HTMLTextAreaElement>
  ): string {
    return ref.current ? ref.current.value : '';
  }

  private extractCheckValue(ref: React.RefObject<HTMLInputElement>): boolean {
    return ref.current ? ref.current.checked : false;
  }

  public componentDidUpdate(): void {
    if (this.props.shouldClear) {
      this.form.current?.reset();
    }
  }

  public render(): JSX.Element | undefined {
    return (
      <form
        className={classes.critiqueForm}
        onSubmit={(event) => event.preventDefault()}
        ref={this.form}
      >
        <h3 className={classes.formTitle}>{Content.formTitle}</h3>

        <FormItemWrapper label={Content.critique.nameLabel} errorMessage={this.props.errors?.name}>
          <input type="text" ref={this.nameRef} />
        </FormItemWrapper>

        <FormItemWrapper label={Content.critique.country} errorMessage={this.props.errors?.country}>
          <select ref={this.countryRef} defaultValue="default">
            <option value="default" disabled></option>
            {Countries.map((country, index) => (
              <option key={index}>{country}</option>
            ))}
          </select>
        </FormItemWrapper>

        <FormItemWrapper label={Content.critique.photo} errorMessage={this.props.errors?.photo}>
          <input type="file" ref={this.photoRef} accept={ImageFormats} />
        </FormItemWrapper>

        <FormItemWrapper
          label={Content.critique.movieLabel}
          errorMessage={this.props.errors?.movie}
        >
          <input type="text" ref={this.movieRef} />
        </FormItemWrapper>

        <FormItemWrapper label={Content.critique.dateLabel} errorMessage={this.props.errors?.date}>
          <input type="date" ref={this.dateRef} />
        </FormItemWrapper>

        <FormItemWrapper
          label={Content.critique.reviewLabel}
          errorMessage={this.props.errors?.review}
          class={classes.review}
        >
          <textarea cols={150} rows={10} ref={this.reviewRef}></textarea>
        </FormItemWrapper>

        <div className={classes.radioContainer}>
          <div className={`${classes.recommendations} ${classes.inputContainer}`}>
            <label>
              <input
                className={classes.choiceInput}
                type="radio"
                name="recommendations"
                ref={this.recommendedRef}
              />
              {Content.critique.recommend}
            </label>
            <label>
              <input
                className={classes.choiceInput}
                type="radio"
                name="recommendations"
                ref={this.unrecommendedRef}
              />
              {Content.critique.unrecommended}
            </label>
          </div>
          {this.props.errors && (
            <p className={classes.errorMessage}>{this.props.errors.recommended}</p>
          )}
        </div>

        <FormItemWrapper
          label={Content.critique.personalDate}
          errorMessage={this.props.errors?.personal}
          class={classes.personal}
        >
          <input className={classes.choiceInput} type="checkbox" ref={this.personalRef} />
        </FormItemWrapper>

        <button className={classes.submit} type="submit" onClick={this.submitForm}>
          {Content.formSubmit}
        </button>
      </form>
    );
  }
}

export default Form;
