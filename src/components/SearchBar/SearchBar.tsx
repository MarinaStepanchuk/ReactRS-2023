import classes from './SearchBar.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { moviesSlice } from '../../store/reducers/moviesSlice';
import { useForm } from 'react-hook-form';

const SearchBar = (): JSX.Element => {
  const { searchText } = useAppSelector((state) => state.moviesReducer);
  const { saveText } = moviesSlice.actions;
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      text: searchText,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmitForm = (data: { text: string }): void => {
    dispatch(saveText(data.text));
    console.log(searchText);
  };

  return (
    <form className={classes.searchBar} onSubmit={handleSubmit(onSubmitForm)}>
      <input {...register('text')} className={classes.search} type="text" />
    </form>
  );
};

export default SearchBar;
