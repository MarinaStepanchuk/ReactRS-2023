import { Mock, vitest } from 'vitest';
import ListCritiques from './ListCritiques';
import { useAppSelector } from '../../hooks/redux';
import { render, screen } from '@testing-library/react';
import movieMock from '../../mocks/movieMock';

vitest.mock('../../hooks/redux');

describe('ListCritiques', () => {
  it('should render correct', () => {
    (useAppSelector as Mock).mockReturnValue({
      cards: [movieMock],
      showSendMessage: false,
    });

    render(<ListCritiques />);

    expect(screen.getAllByTestId('itemCritique').length).toBe(1);
  });

  it('should render correct', () => {
    (useAppSelector as Mock).mockReturnValue({
      cards: [],
      showSendMessage: false,
    });

    render(<ListCritiques />);

    expect(screen.queryByTestId('itemCritique')).not.toBeInTheDocument();
  });
});
