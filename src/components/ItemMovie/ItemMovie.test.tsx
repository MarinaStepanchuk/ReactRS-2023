import ItemMovie from './ItemMovie';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Url } from '../../Api/Api';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const movie = {
  id: 678975,
  name: 'Need for Speed: Жажда скорости',
  poster: null,
  externalId: null,
  rating: null,
  votes: null,
  movieLength: null,
  type: null,
  description: null,
  year: null,
  genres: null,
  countries: null,
  alternativeName: null,
  enName: null,
  names: null,
  shortDescription: null,
  logo: null,
  watchability: null,
};

const movieDetails = {
  id: 678975,
  name: 'Need for Speed: Жажда скорости',
  poster: {
    url: 'https://st.kp.yandex.net/images/film_big/678975.jpg',
    previewUrl: 'https://st.kp.yandex.net/images/film_iphone/iphone360_678975.jpg',
  },
  description:
    'История Тоби Маршалла, гениального автомеханика, чьей единственной отдушиной является участие в подпольных гонках. Чтобы сохранить семейную мастерскую, Тоби вынужден взять в партнеры богатого и заносчивого бывшего гонщика IndyCar Дино Брюстера. Когда дела Тоби наконец-то начинают идти в гору, Дино подставляет партнера, и Тоби обвиняют в преступлении, которого он не совершал. Спустя два года Тоби выходит из тюрьмы с мыслью о мести. Чтобы достичь своей цели, ему придется совершить невозможное и доказать, что даже в мире броских суперкаров самый невзрачный гонщик может финишировать первым.',
};

const server = setupServer(
  rest.get(`${Url.movie}${movieDetails.id}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movieDetails));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Movies', () => {
  it('should send fetch and render modal card', async () => {
    render(<ItemMovie key={movie.id} movie={movie} />);

    const card = screen.getByText('Need for Speed: Жажда скорости');
    fireEvent.click(card);

    await waitFor(() => {
      expect(
        screen.getByText(
          'История Тоби Маршалла, гениального автомеханика, чьей единственной отдушиной является участие в подпольных гонках. Чтобы сохранить семейную мастерскую, Тоби вынужден взять в партнеры богатого и заносчивого бывшего гонщика IndyCar Дино Брюстера. Когда дела Тоби наконец-то начинают идти в гору, Дино подставляет партнера, и Тоби обвиняют в преступлении, которого он не совершал. Спустя два года Тоби выходит из тюрьмы с мыслью о мести. Чтобы достичь своей цели, ему придется совершить невозможное и доказать, что даже в мире броских суперкаров самый невзрачный гонщик может финишировать первым.'
        )
      ).toBeInTheDocument();
    });
  });
});
