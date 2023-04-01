import Form from './Form';
import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import { ErrorMessages, InputName } from '../../constants/common.constants';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  const onSubmit = vitest.fn();
  const errors = {
    name: ErrorMessages.emptyLine,
    date: ErrorMessages.wrongDate,
  };

  beforeEach(() => {
    render(<Form onSubmit={onSubmit} shouldClear={false} errors={errors} />);
  });

  it('should render correct', () => {
    const textBoxes = screen.getAllByRole('textbox');
    expect(textBoxes[0].getAttribute('id')).toBe(InputName.name);
    expect(screen.getByRole('checkbox').getAttribute('checked')).toBeFalsy();
  });

  it('should show errors', () => {
    expect(screen.getByText(ErrorMessages.emptyLine)).toBeInTheDocument();
    expect(screen.getAllByTestId('errorMessage').length).toBe(2);
  });

  it('should be no ungenerated errors', () => {
    expect(screen.queryByText(ErrorMessages.missingPhoto)).not.toBeInTheDocument();
  });

  it('should call onSubmit', async () => {
    await userEvent.click(screen.getByRole('button'));
    expect(onSubmit).toHaveBeenCalled();
  });

  it('should call onSubmit with the necessary parameters', async () => {
    await userEvent.type(screen.getAllByRole('textbox')[0], 'Marina');
    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Belgium' })
    );
    await userEvent.type(screen.getAllByRole('textbox')[2], 'Good movie');
    await userEvent.click(screen.getAllByRole('radio')[0]);
    await userEvent.click(screen.getByRole('button'));

    const expectedCard = {
      name: 'Marina',
      country: 'Belgium',
      photo: '',
      date: '',
      movie: '',
      review: 'Good movie',
      recommended: true,
      unrecommended: false,
      personal: false,
    };

    expect(onSubmit).toBeCalledWith(expectedCard);
  });
});
