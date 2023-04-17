import ItemMovie from './ItemMovie';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import movieMock from '../../mocks/movieMock';
import movieDetailsMock from '../../mocks/movieDetailsMock';
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';

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
