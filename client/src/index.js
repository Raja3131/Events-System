import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from './Redux/Store/index'
import {Provider} from 'react-redux'
import './index.css';

let store=configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

