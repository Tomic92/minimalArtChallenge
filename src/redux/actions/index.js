import axios from "axios";

export function getAllPokemons() {
  return (dispatch)=>{
    return axios("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(res => dispatch({type:"GET_ALL_POKEMONS", payload: res.data.results.map(p=>p.name)}))
    .then(res=>console.log("actions", res.payload))
  }
}