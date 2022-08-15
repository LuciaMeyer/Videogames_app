import React from "react"
import { Route, Switch } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Home } from './components/Home'
import { Create } from './components/Create';
import { About } from './components/About';
import { GameDetail } from './components/GameDetail';
import { Error } from './components/Error'
import { Update } from "./components/Update";
// import { Nav } from './components/Nav'
import { NewData } from "./components/NewData";
import './App.css'



export const App = () => {
  return (
    <>
      <Route exact path= '/' component= { Landing } />
      {/* <Nav /> */}
      <Switch>
        <Route exact path= '/home' component= { Home } />
        <Route exact path= '/game/:id' component= {GameDetail }/>
        <Route exact path= '/create' component={ Create } />
        <Route exact path="/game/:id/update" component={ Update } />
        <Route exact path= '/about' component={ About } />
        <Route exact path='/newdata' component= { NewData } />
        <Route path="*" component={ Error } />
      </Switch>
    </>
  )
};
