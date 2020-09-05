import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import './theme/index.css';
import App from './App';
import store from './services/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

