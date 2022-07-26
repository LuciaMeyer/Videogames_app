import React from "react"
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';


function App() {
  return (
    <>
      <Switch>
        <Route exact path= '/' component= {Landing} />
        <Route exact path= '/home' component= {Home} />
      </Switch>
    </>
  );
}

export default App;
