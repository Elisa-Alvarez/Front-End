import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { createBrowserHistory } from 'history'



import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const history = createBrowserHistory()


const rootElement = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
          <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
