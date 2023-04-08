import SearchBar from './SearchBar';
import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
  const onTextChange = vitest.fn();

  it('should call function test', async () => {
    const user = userEvent.setup();
    render(<SearchBar onTextChange={onTextChange} />);
    await user.type(screen.getByRole('textbox'), '123{enter}');
    expect(onTextChange).toHaveBeenCalled();
  });
});
