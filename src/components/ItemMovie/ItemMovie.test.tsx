import ItemMovie from './ItemMovie';
import { render, screen } from '@testing-library/react';
import movieMock from '../../mocks/movieMock';
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';

describe('Movies', () => {
  it('should render card', async () => {
    render(
      <Provider store={store}>
        <ItemMovie key={movieMock.id} movie={movieMock} />
      </Provider>
    );

    expect(screen.getByText(movieMock.year, { exact: false })).toBeInTheDocument();
  });
});
