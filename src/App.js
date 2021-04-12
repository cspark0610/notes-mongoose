import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Notes from './components/Notes'
import CreateNote from './components/CreateNote'


function App() {
  return (
    //navbar que contenga 3 links : Home , Notes y Create Note
    <BrowserRouter>
      <Navbar />
      <Route path='/' exact> <Home/> </Route>
      <Route path='/notes'> <Notes/> </Route>
      <Route path='/create'> <CreateNote/>  </Route>
    </BrowserRouter>
  );
}

export default App;
