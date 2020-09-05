import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NotFound from './Components/Main/NotFound';
import FriendDetail from './Components/FriendDetail/FriendDetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'> <Main /> </Route>
        <Route path='/main'> <Main /> </Route>
        <Route path='/about/:aboutId'> <FriendDetail /> </Route>
        <Route path='*'> <NotFound /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
