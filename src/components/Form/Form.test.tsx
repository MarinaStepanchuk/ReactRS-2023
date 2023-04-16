import Form from './Form';
import { render, screen } from '@testing-library/react';
import { vitest, Mock } from 'vitest';
import { InputName } from '../../constants/common.constants';
import { useAppDispatch } from '../../hooks/redux';

vitest.mock('../../hooks/redux');

describe('Form', () => {
  const mockDispatch = vitest.fn();
  (useAppDispatch as Mock).mockReturnValue(mockDispatch);

  beforeEach(() => {
    render(<Form />);
  });

  it('should render correct', () => {
    const textBoxes = screen.getAllByRole('textbox');
    expect(textBoxes[0].getAttribute('id')).toBe(InputName.name);
    expect(screen.getByRole('checkbox').getAttribute('checked')).toBeFalsy();
  });
});
