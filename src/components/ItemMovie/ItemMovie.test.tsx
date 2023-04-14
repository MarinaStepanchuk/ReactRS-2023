import ItemMovie from './ItemMovie';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Url } from '../../Api/Api';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import movieMock from '../../mocks/movieMock';
import movieDetailsMock from '../../mocks/movieDetailsMock';

const server = setupServer(
  rest.get(`${Url.movie}${movieDetailsMock.id}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movieDetailsMock));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Movies', () => {
  it('should send fetch and render modal card', async () => {
    render(<ItemMovie key={movieMock.id} movie={movieMock} />);

    const card = screen.getByText(movieDetailsMock.name);
    fireEvent.click(card);

    await waitFor(() => {
      expect(screen.getByText(movieDetailsMock.description)).toBeInTheDocument();
    });
  });
});
