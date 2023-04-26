import './src/index.css';
import {
  PipeableStream,
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import App from './src/App/App';
import { store } from './src/redux/store/store';

export const render = (url: string, options?: RenderToPipeableStreamOptions): PipeableStream => {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
  return stream;
};
