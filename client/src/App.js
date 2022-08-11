import React from "react"
import { Route, Switch } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Home } from './components/Home'
import { Create } from './components/Create';
import { About } from './components/About';
import { GameDetail } from './components/GameDetail';
import { Error } from './components/Error'



export const App = () => {
  return (
    <>
      <Switch>
        <Route exact path= '/' component= { Landing } />
        <Route exact path= '/home' component= { Home } />
        <Route exact path= '/game/:id' component= {GameDetail }/>
        <Route exact path= '/create' component={ Create } />
        <Route exact path= '/about' component={ About } />
        <Route path="*" component={ Error } />
      </Switch>
    </>
  )
};
