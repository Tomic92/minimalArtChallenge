import axios from "axios";

/* export function getAllPokemons() {
  return (dispatch)=>{
    return axios("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(res => dispatch({type:"GET_ALL_POKEMONS", payload: res.data.results.map(p=>p.name)}))
    // .then(res=>console.log("actions", res.payload))
  }
} */

export function getAllPokemons() {
  return async (dispatch)=>{
    try {
      const res = await axios("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
      return dispatch({ type: "GET_ALL_POKEMONS", payload: res.data.results.map(p => p.name) });
    } catch (error) {
      alert(error)
    }
  }
}