import ItemMovie from './ItemMovie';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import movieMock from '../../mocks/movieMock';
import movieDetailsMock from '../../mocks/movieDetailsMock';
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';

const server = setupServer(
  rest.get(`https://api.kinopoisk.dev/v1/movie/${movieDetailsMock.id}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movieDetailsMock));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Movies', () => {
  it('should send fetch and render modal card', async () => {
    render(
      <Provider store={store}>
        <ItemMovie key={movieMock.id} movie={movieMock} />
      </Provider>
    );

    const card = screen.getByText(movieDetailsMock.name);
    fireEvent.click(card);

    await waitFor(() => {
      expect(screen.getByText(movieDetailsMock.description)).toBeInTheDocument();
    });
  });
});
