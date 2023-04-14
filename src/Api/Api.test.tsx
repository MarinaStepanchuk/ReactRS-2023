import Api, { Url } from './Api';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const emptyResponse = {
  docs: [],
  total: 0,
  limit: 10,
  page: 1,
  pages: 0,
};

const server = setupServer(
  rest.get(Url.allMovies, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(emptyResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Api', () => {
  it('should return empty array for unknown movie', async () => {
    const data = await Api.getMovies('rrrrrrr');
    expect(data).toEqual(emptyResponse.docs);
  });

  const error = 'По этому id ничего не найдено!';

  it('should return an error on wrong id', async () => {
    server.use(
      rest.get(Url.movie, (req, res, ctx) => {
        return res(ctx.status(404), ctx.json(error));
      })
    );
    const data = await Api.getMovieById('1');
    expect(data).toEqual(error);
  });
});
