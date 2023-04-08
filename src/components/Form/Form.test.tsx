import Form from './Form';
import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import { InputName } from '../../constants/common.constants';

describe('Form', () => {
  const onSubmit = vitest.fn();

  beforeEach(() => {
    render(<Form onSubmit={onSubmit} />);
  });

  it('should render correct', () => {
    const textBoxes = screen.getAllByRole('textbox');
    expect(textBoxes[0].getAttribute('id')).toBe(InputName.name);
    expect(screen.getByRole('checkbox').getAttribute('checked')).toBeFalsy();
  });
});
