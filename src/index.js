import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import * as serviceWorker from './serviceWorker';
import { reducer } from './store/reducers/results';
import { count_reducer } from './store/reducers/count_reducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  res: reducer,
  count: count_reducer,
});
const store = createStore(rootReducer);

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
