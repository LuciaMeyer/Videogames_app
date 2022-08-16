import React from "react"
import { Route, Switch } from 'react-router-dom';
import { Landing } from './components/Landing/Landing';
import { Home } from './components/Home/Home'
import { Create } from './components/Create/Create';
import { About } from './components/About/About';
import { GameDetail } from './components/GameDetail/GameDetail';
import { Error } from './components/Error'
import { UpDate } from "./components/UpDate/Update";
import { SetGame } from "./components/SetGame/SetGame";

export const App = () => {
  return (
    <>
      <Switch>
        <Route exact path= '/' component= { Landing } />
        <Route exact path= '/home' component= { Home } />
        <Route exact path= '/game/:id' component= {GameDetail }/>
        <Route exact path= '/create' component={ Create } />
        <Route exact path="/game/:id/update" component={ UpDate } />
        <Route exact path= '/about' component={ About } />
        <Route exact path='/setgame' component= { SetGame } />
        <Route path="*" component={ Error } />
      </Switch>
    </>
  )
};
