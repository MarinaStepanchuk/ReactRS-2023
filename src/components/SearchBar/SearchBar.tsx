import React from 'react';
import { Buttons } from '../../constants/common.constants';
import classes from './SearchBar.module.scss';

interface ISearchBarProps {
  text: string;
  onTextChange: (value: string) => void;
}

class SearchBar extends React.Component<ISearchBarProps, object> {
  constructor(public props: ISearchBarProps) {
    super(props);
    // this.handleTextChange = this.handleTextChange.bind(this);
  }

  private handleTextChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.onTextChange(e.target.value);
  }

  public render(): JSX.Element {
    const text = this.props.text;

    return (
      <div className={classes.searchBar}>
        <input
          className={classes.search}
          type="text"
          value={text}
          onChange={this.handleTextChange}
        />
        <button className={classes.submit}>{Buttons.search}</button>
      </div>
    );
  }
}

export default SearchBar;
