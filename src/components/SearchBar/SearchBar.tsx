import { useEffect, useRef, useState } from 'react';
import { Buttons, LocalStorageKeys } from '../../constants/common.constants';
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
    onTextChange(e.target.value);
  };

  useEffect(() => () => localStorage.setItem(LocalStorageKeys.search, `${inputText.current}`), []);

  return (
    <div className={classes.searchBar}>
      <input
        className={classes.search}
        type="text"
        value={searchText}
        onChange={handleTextChange}
      />
      <button className={classes.submit}>{Buttons.search}</button>
    </div>
  );
};

export default SearchBar;
