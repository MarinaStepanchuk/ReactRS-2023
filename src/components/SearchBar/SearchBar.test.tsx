import SearchBar from './SearchBar';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { vitest } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
  const onTextChange = vitest.fn();

  it('call function test', async () => {
    const user = userEvent.setup();
    render(<SearchBar text="" onTextChange={onTextChange} />);
    await user.type(screen.getByRole('textbox'), '123');
    expect(onTextChange).toHaveBeenCalled();
    expect(onTextChange).toHaveBeenLastCalledWith('3');
  });
});
