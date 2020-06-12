import React from 'react';
import Header from './components/Header';
import {
   Route } from 'react-router-dom';
import StreamList from './components/StreamList';
import StreamCreate from './components/StreamCreate';
import StreamDelete from './components/StreamDelete';
import StreamEdit from './components/streamEdit';
import StreamShow from './components/StreamShow';






function App() {
  return (
    <div className="ua container" style = {{padding:'50px'}}>
 
            <Header/>
            
               <Route path = '/streams'exact component ={ StreamList}/>
               <Route path = '/streams/new' exact component ={ StreamCreate}/>
               <Route path = '/streams/delete' component ={ StreamDelete}/>
               <Route path = '/streams/edit' component ={ StreamEdit}/>
               <Route path = '/streams/swow' component ={ StreamShow}/>
      
 
    </div>
  );
}

export default App;

