import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ReduxPromise } from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

//Hook in ReduxPromise into our application. Resolves our promises.
const createStoreWithMiddleware = applyMiddleware()(createStore, ReduxPromise);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
