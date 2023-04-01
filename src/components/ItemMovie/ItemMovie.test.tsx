import ItemMovie from './ItemMovie';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('ItemMovie', () => {
  const movie = {
    id: 1423589,
    name: 'The Banshees of Inisherin',
    countries: [
      {
        name: 'United Kingdom',
      },
      {
        name: 'United States',
      },
      {
        name: 'Ireland',
      },
    ],
    year: 2022,
    poster:
      'https://resizing.flixster.com/SqYohHz5ela5G1qTZ8aKYunK2Oo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc4ZjI3ZDBiLTkwMDktNDVkZC1hZmI5LTJiNDdjNWRmZDVjOC5qcGc=',
    rating: 7.7,
  };

  it('should render correct', () => {
    render(<ItemMovie key={1423589} movie={movie} text={'Banshees'} />);
    expect(screen.getByRole('img').getAttribute('src')).toBe(movie.poster);
  });
});
