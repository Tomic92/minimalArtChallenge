import React from "react";
import { Route } from "react-router-dom";
import Landing from "../components/Landing";
import ListPokemons from "../components/ListPokemons";

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/pokedex" component={ListPokemons} />
    </div>
  );
}
