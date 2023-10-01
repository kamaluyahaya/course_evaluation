import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux'; // Import createStore from redux
import { rootReducer } from './redux/actions'; // Correct the import path for reducers

const store = createStore(rootReducer); // Create the Redux store

const root = document.getElementById('root'); // Correct the method name to getElementById
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Fix the typo in "store" */}
      <App />
    </Provider>
  </React.StrictMode>,
  root
);
