import Error from './Error';
import { render, screen } from '@testing-library/react';
import { Pages } from '../../constants/common.constants';

describe('Error', () => {
  it('should render correct', () => {
    render(<Error />);
    expect(screen.getByText(Pages.error)).toBeTruthy();
  });
});
