import { Buttons } from '../../constants/common.constants';
import classes from './SearchBar.module.scss';

interface ISearchBarProps {
  text: string;
  onTextChange: (value: string) => void;
}

const SearchBar = (props: ISearchBarProps) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.onTextChange(e.target.value);
  };

  return (
    <div className={classes.searchBar}>
      <input
        className={classes.search}
        type="text"
        value={props.text}
        onChange={handleTextChange}
      />
      <button className={classes.submit}>{Buttons.search}</button>
    </div>
  );
};

export default SearchBar;
