import Main from './Main';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Content } from '../../constants/common.constants';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../redux/store/store';

describe('Main', () => {
  it('should render correct', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(Content.greeting)).toBeTruthy();
  });
});
