import { useEffect, useRef, useState } from 'react';
import { LocalStorageKeys } from '../../constants/common.constants';
import classes from './SearchBar.module.scss';

interface ISearchBarProps {
  onTextChange: (value: string) => void;
}

const SearchBar = ({ onTextChange }: ISearchBarProps): JSX.Element => {
  const [searchText, setSearchText] = useState(localStorage.getItem(LocalStorageKeys.search) || '');

  const inputText = useRef(searchText);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    inputText.current = e.target.value;
    setSearchText(e.target.value);
    // onTextChange(e.target.value);
  };

  useEffect(() => () => localStorage.setItem(LocalStorageKeys.search, `${inputText.current}`), []);

  const onSubmitForm = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSearchText(inputText.current);
    onTextChange(inputText.current);
  };

  return (
    <form className={classes.searchBar} onSubmit={onSubmitForm}>
      <input
        className={classes.search}
        type="text"
        value={searchText}
        onChange={handleTextChange}
      />
    </form>
  );
};

export default SearchBar;
