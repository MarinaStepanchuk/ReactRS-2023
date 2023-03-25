import ItemCritique from './ItemCritique';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('ItemCritique', () => {
  const critique = {
    name: 'Marina Stepanchuk',
    country: 'USA',
    photo: './../photo',
    date: '3-11-2021',
    movie: 'The Banshees of Inisherin',
    review: 'Is a good movie',
    recommended: true,
    unrecommended: false,
    personal: true,
  };

  it('should render correct', () => {
    render(<ItemCritique key={1245} critique={critique} />);
    expect(screen.getByRole('img').getAttribute('src')).toBe(critique.photo);
  });
});
