import React from 'react';
import Header from './components/Header';
import {
   Route, Switch } from 'react-router-dom';
import StreamList from './components/StreamList';
import StreamCreate from './components/StreamCreate';
import StreamDelete from './components/StreamDelete';
import StreamEdit from './components/streamEdit';
import StreamShow from './components/StreamShow';






function App() {
  return (
    <div className="ua container" style = {{padding:'50px'}}>
 
            <Header/>
            <Switch>
               <Route path = '/streams' exact component ={ StreamList}/>
               <Route path = '/streams/new' exact component ={ StreamCreate}/>
               <Route path = '/streams/delete/:id' component ={ StreamDelete}/>
               <Route path = '/streams/edit/:id' component ={ StreamEdit}/>
               <Route path = '/streams/:id' exact component ={ StreamShow}/>
               </Switch>
      
 
    </div>
  );
}

export default App;

