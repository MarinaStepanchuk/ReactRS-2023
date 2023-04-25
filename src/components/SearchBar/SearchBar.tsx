import classes from './SearchBar.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchTextSlice } from '../../redux/store/reducers/SearchTextSlice/searchTextSlice';
import { useForm } from 'react-hook-form';

const SearchBar = (): JSX.Element => {
  const { searchText } = useAppSelector((state) => state.searchReducer);
  const { saveText } = searchTextSlice.actions;
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
  };

  return (
    <form className={classes.searchBar} onSubmit={handleSubmit(onSubmitForm)}>
      <input {...register('text')} className={classes.search} type="text" />
    </form>
  );
};

export default SearchBar;
