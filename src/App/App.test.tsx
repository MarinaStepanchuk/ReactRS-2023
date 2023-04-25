import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../redux/store/store';

describe('App', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });

  test('should render the navigation menu', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
