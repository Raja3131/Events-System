import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from './Redux/Store/index'
import {Provider} from 'react-redux'

let store=configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

