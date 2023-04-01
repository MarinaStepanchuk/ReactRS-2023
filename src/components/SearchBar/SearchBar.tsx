import React from 'react';
import { Buttons } from '../../constants/common.constants';
import classes from './SearchBar.module.scss';

interface ISearchBarProps {
  text: string;
  onTextChange: (value: string) => void;
}

class SearchBar extends React.Component<ISearchBarProps> {
  private handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    this.props.onTextChange(e.target.value);
  };

  public render(): JSX.Element {
    return (
      <div className={classes.searchBar}>
        <input
          className={classes.search}
          type="text"
          value={this.props.text}
          onChange={this.handleTextChange}
        />
        <button className={classes.submit}>{Buttons.search}</button>
      </div>
    );
  }
}

export default SearchBar;
