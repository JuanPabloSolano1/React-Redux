import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import { reducer } from './store/reducers/results';
import { count_reducer } from './store/reducers/count_reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  res: reducer,
  count: count_reducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[Middleware] dispatching', action);
      const result = next(action);
      console.log('[Middleware next state', store.getState());
      return result;
    };
  };
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
