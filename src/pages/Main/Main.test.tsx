import Main from './Main';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Content } from '../../constants/common.constants';

describe('Main', () => {
  it('should render correct', () => {
    render(<Main />);
    expect(screen.getByText(Content.greeting)).toBeTruthy();
  });
});
