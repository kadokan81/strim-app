import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import redusers from './redusers';
// import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

// const store = createStore(redusers, applyMiddleware(thunk));

ReactDOM.render(

    //  <Provider  store = {store}> 
     <BrowserRouter>
       <App />
       </BrowserRouter>
    // </Provider>,,
    ,

  document.getElementById('root')
);


