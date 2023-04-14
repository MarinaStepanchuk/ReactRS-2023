import Movies from './Movies';
import { render, screen, waitFor } from '@testing-library/react';
import { Url } from '../../Api/Api';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

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

const server = setupServer(
  rest.get(Url.allMovies, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movies));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Movies', () => {
  it('should send fetch and render card', async () => {
    render(<Movies />);
    await waitFor(() => {
      expect(screen.getByText('1+1')).toBeInTheDocument();
      expect(screen.getByText('Год выпуска: 2011')).toBeInTheDocument();
    });
  });
});
