import React from "react";
import { Route } from "react-router-dom";
import Landing from "../components/Landing";
import ListPokemons from "../components/ListPokemons";
import Pokedex from "../components/Pokedex";

export default function App() {
  return (
    <div className="App">
      <Pokedex />
      <Route exact path="/" component={Landing} />
      <Route exact path="/pokedex" component={ListPokemons} />
    </div>
  );
}
