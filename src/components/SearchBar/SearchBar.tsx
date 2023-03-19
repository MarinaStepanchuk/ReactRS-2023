import React from 'react';
import { Buttons } from '../../constants/common.constants';
import classes from './SearchBar.module.scss';

interface ISearchBarProps {
  text: string;
  onTextChange: (value: string) => void;
}

export default class SearchBar extends React.Component<ISearchBarProps, object> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onTextChange(e.target.value);
  }

  render(): JSX.Element {
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
