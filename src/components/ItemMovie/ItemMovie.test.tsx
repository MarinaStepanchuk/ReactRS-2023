import ItemMovie from './ItemMovie';
import { render, screen } from '@testing-library/react';

describe('ItemMovie', () => {
  const movie = {
    externalId: null,
    rating: {
      kp: null,
      imdb: 7.7,
      filmCritics: null,
      russianFilmCritics: null,
      await: null,
    },
    votes: {
      kp: null,
      imdb: null,
      filmCritics: null,
      russianFilmCritics: null,
      await: null,
    },
    movieLength: null,
    id: 1423589,
    type: null,
    name: 'The Banshees of Inisherin',
    description: null,
    year: 2022,
    poster: {
      url: 'https://resizing.flixster.com/SqYohHz5ela5G1qTZ8aKYunK2Oo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc4ZjI3ZDBiLTkwMDktNDVkZC1hZmI5LTJiNDdjNWRmZDVjOC5qcGc=',
      previewUrl: null,
    },
    genres: null,
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
    alternativeName: null,
    enName: null,
    names: null,
    shortDescription: null,
    logo: {
      url: null,
    },
    watchability: null,
  };

  it('should render correct', () => {
    render(<ItemMovie key={1423589} movie={movie} />);
    expect(screen.getByRole('img').getAttribute('src')).toBe(movie.poster.url);
  });
});
