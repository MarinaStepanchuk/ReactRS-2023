import Movies from './Movies';
import { render, screen } from '@testing-library/react';
import { useGetMoviesQuery } from '../../redux/services/MoviesService';
import { vitest, Mock } from 'vitest';
import { useAppSelector } from '../../hooks/redux';

vitest.mock('../../redux/services/MoviesService');
vitest.mock('../../hooks/redux');

const movies = {
  docs: [
    {
      name: '1+1',
      year: 2011,
    },
  ],
  total: 273960,
  limit: 10,
  page: 1,
  pages: 27396,
};

describe('Movies', () => {
  it('should send fetch and render card', async () => {
    (useGetMoviesQuery as Mock).mockReturnValue({
      data: movies,
    });

    (useAppSelector as Mock).mockReturnValue({
      searchText: '1',
    });

    render(<Movies />);

    expect(screen.getByText(movies.docs[0].name)).toBeInTheDocument();
    expect(screen.getByText(`Год выпуска: ${movies.docs[0].year}`)).toBeInTheDocument();
  });
});
