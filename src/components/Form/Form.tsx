import {
  Content,
  Countries,
  InputName,
  ImageFormats,
  RegName,
  ErrorMessages,
} from '../../constants/common.constants';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import { useForm } from 'react-hook-form';
import { sendCard, showMessage } from '../../redux/store/reducers/CritiquesSlice/critiquesSlice';
import { useAppDispatch } from '../../hooks/redux';
import classes from './Form.module.scss';

interface IFormData {
  name: string;
  country: string;
  photo: FileList | string;
  movie: string;
  date: string;
  review: string;
  recommended: string;
  personal: boolean;
}

const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      country: '',
      photo: '',
      movie: '',
      date: '',
      review: '',
      recommended: 'off',
      personal: false,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const dispatch = useAppDispatch();

  const onSubmitForm = (data: IFormData) => {
    const { name, country, photo, date, movie, review, recommended, personal } = data;

    const card = {
      name: name,
      country: country,
      photo: URL.createObjectURL(photo[0] as Blob | MediaSource),
      date: date,
      movie: movie,
      review: review,
      recommended: recommended === 'recommended',
      personal: personal,
    };

    dispatch(showMessage());
    setTimeout(() => {
      dispatch(sendCard(card));
      reset();
    }, 1000);
  };

  return (
    <form className={classes.critiqueForm} onSubmit={handleSubmit(onSubmitForm)}>
      <h3 className={classes.formTitle}>{Content.formTitle}</h3>
      <div className={classes.dataWrapper}>
        <div className={classes.formBlock}>
          <FormItemWrapper
            label={Content.critique.nameLabel}
            errorMessage={errors.name?.message}
            name={InputName.name}
          >
            <input
              className={classes.customInput}
              type="text"
              {...register('name', {
                required: ErrorMessages.emptyLine,
                pattern: { value: RegName, message: ErrorMessages.invalidName },
              })}
              id={InputName.name}
            />
          </FormItemWrapper>
          <FormItemWrapper
            label={Content.critique.country}
            errorMessage={errors.country?.message}
            name={InputName.country}
          >
            <select
              className={classes.customInput}
              {...register('country', {
                required: ErrorMessages.emptyLine,
              })}
              id={InputName.country}
            >
              {Countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
          </FormItemWrapper>
          <FormItemWrapper
            label={Content.critique.photo}
            errorMessage={errors.photo?.message}
            name={InputName.photo}
          >
            <input
              data-testid="photoInput"
              type="file"
              {...register('photo', {
                required: ErrorMessages.missingPhoto,
              })}
              accept={ImageFormats}
              id={InputName.photo}
            />
          </FormItemWrapper>
          <FormItemWrapper
            label={Content.critique.movieLabel}
            errorMessage={errors.movie?.message}
            name={InputName.movie}
          >
            <input
              className={classes.customInput}
              type="text"
              {...register('movie', {
                required: ErrorMessages.emptyLine,
              })}
              id={InputName.movie}
            />
          </FormItemWrapper>
          <FormItemWrapper
            label={Content.critique.dateLabel}
            errorMessage={errors.date?.message}
            name={InputName.date}
          >
            <input
              className={classes.customInput}
              data-testid="dateInput"
              type="date"
              {...register('date', {
                required: ErrorMessages.emptyLine,
                validate: (value) =>
                  new Date(value).getTime() < new Date().getTime() || ErrorMessages.wrongDate,
              })}
              id={InputName.date}
            />
          </FormItemWrapper>
        </div>
        <div className={classes.formBlock}>
          <FormItemWrapper
            label={Content.critique.reviewLabel}
            errorMessage={errors.review?.message}
            class={classes.review}
            name={InputName.review}
          >
            <textarea
              cols={150}
              rows={7}
              {...register('review', {
                required: ErrorMessages.emptyLine,
              })}
              id={InputName.review}
              className={classes.customInput}
            ></textarea>
          </FormItemWrapper>
        </div>
      </div>
      <div className={classes.radioContainer}>
        <div className={`${classes.recommendations} ${classes.inputContainer}`}>
          <label>
            <input
              className={classes.choiceInput}
              value="recommended"
              type="radio"
              {...register('recommended', {
                required: ErrorMessages.recommended,
              })}
            />
            {Content.critique.recommend}
          </label>
          <label>
            <input
              className={classes.choiceInput}
              value="unrecommended"
              type="radio"
              {...register('recommended', {
                required: ErrorMessages.recommended,
              })}
            />
            {Content.critique.unrecommended}
          </label>
        </div>
        {errors.recommended?.message && (
          <p className={classes.errorMessage}>{errors.recommended?.message}</p>
        )}
      </div>
      <FormItemWrapper
        label={Content.critique.personalDate}
        errorMessage={errors.personal?.message}
        class={classes.personal}
        name={InputName.personalDate}
      >
        <input
          className={classes.choiceInput}
          type="checkbox"
          {...register('personal', {
            required: ErrorMessages.personalData,
          })}
          id={InputName.personalDate}
        />
      </FormItemWrapper>
      <input
        className={classes.submit}
        type="submit"
        value={Content.formSubmit}
        data-cy="submit-button"
      ></input>
    </form>
  );
};

export default Form;
