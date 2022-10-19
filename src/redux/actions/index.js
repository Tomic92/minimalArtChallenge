import axios from "axios";

export function getAllPokemons() {
  return (dispatch)=>{
    return axios("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(res => dispatch({type:"GET_ALL_POKEMONS", payload: res.data}))
    .then(res=>console.log(res))
  }
}