import Critiques from './Critiques';
import { render, screen } from '@testing-library/react';
import { Content } from '../../constants/common.constants';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../redux/store/store';

describe('Main', () => {
  it('should render correct', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Critiques />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(Content.critiquesTitle)).toBeTruthy();
  });
});
