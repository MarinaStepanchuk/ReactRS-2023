import ModalCard from './ModalCard';
import { render, screen } from '@testing-library/react';
import { useGetMovieByIdQuery } from '../../redux/services/MoviesService';
import { useAppSelector } from '../../hooks/redux';
import { vitest, Mock } from 'vitest';
import movieDetailsMock from '../../mocks/movieDetailsMock';

vitest.mock('../../redux/services/MoviesService');
vitest.mock('../../hooks/redux');

describe('ModalCard', () => {
  it('should render modal card', async () => {
    (useGetMovieByIdQuery as Mock).mockReturnValue({
      data: movieDetailsMock,
    });

    (useAppSelector as Mock).mockReturnValue({
      idCard: movieDetailsMock.id,
    });

    render(<ModalCard />);

    expect(screen.getByText(movieDetailsMock.description, { exact: false })).toBeInTheDocument();
  });
});
