import React from "react"
import { Route, Switch } from "react-router-dom";
import { Home } from './components/Home';
// importar todos los componentes que use

export const App = () => {
  return (
    <>
      <Home />
    </>
  );
}
