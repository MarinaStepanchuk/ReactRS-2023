import ListCritiques from './ListCritiques';
import { render, screen } from '@testing-library/react';

describe('ListCritiques', () => {
  const critiques = [
    {
      name: 'Marina Stepanchuk',
      country: 'USA',
      photo: './../photo',
      date: '3-11-2021',
      movie: 'The Banshees of Inisherin',
      review: 'Is a good movie',
      recommended: true,
      unrecommended: false,
      personal: true,
    },
    {
      name: 'Olga Dark',
      country: 'Belgium',
      photo: './../profile',
      date: '3-10-2022',
      movie: 'Avatar',
      review: 'Like this movie',
      recommended: true,
      unrecommended: false,
      personal: true,
    },
  ];

  it('should render correct', () => {
    render(<ListCritiques critiques={critiques} />);
    expect(screen.getAllByTestId('itemCritique').length).toBe(2);
  });
});
