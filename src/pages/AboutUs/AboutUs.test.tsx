import AboutUs from './AboutUs';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Pages } from '../../constants/common.constants';

describe('AboutUs', () => {
  it('should render correct', () => {
    render(<AboutUs />);
    expect(screen.getByText(Pages.about)).toBeTruthy();
  });
});
