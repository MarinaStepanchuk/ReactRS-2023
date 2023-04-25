import SearchBar from './SearchBar';
import { render, screen } from '@testing-library/react';
import { vitest, Mock } from 'vitest';
import userEvent from '@testing-library/user-event';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';

vitest.mock('../../hooks/redux');

describe('SearchBar', () => {
  (useAppSelector as Mock).mockReturnValue({
    searchText: '',
  });

  const mockDispatch = vitest.fn();
  (useAppDispatch as Mock).mockReturnValue(mockDispatch);

  it('should call function test', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    await user.type(screen.getByRole('textbox'), '123{enter}');
    expect(mockDispatch).toHaveBeenCalled();
  });
});
