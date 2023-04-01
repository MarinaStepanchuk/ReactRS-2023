import AboutUs from './AboutUs';
import { render, screen } from '@testing-library/react';
import { Content } from '../../constants/common.constants';

describe('AboutUs', () => {
  it('should render correct', () => {
    render(<AboutUs />);
    expect(screen.getByText(Content.about)).toBeTruthy();
  });
});
