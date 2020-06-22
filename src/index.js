import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose  } from 'redux';
import redusers from './redusers';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import history from './history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(redusers,composeEnhancers( applyMiddleware(thunk)));

ReactDOM.render(

     <Provider  store = {store}> 
     <Router history ={history}>
       <App />
       </Router>
    </Provider>,
    
  document.getElementById('root')
);


