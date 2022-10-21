import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllPokemons } from "../redux/actions";
import "./../styles/listPokemons.css";
import Loading from "./Loading";
import Pagination from "./Pagination";

export default function ListPokemons() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch()
  // const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 150;

  const indexLastPokemon = currentPage * pokemonsPerPage;
  const indexFirstPokemon = indexLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexFirstPokemon, indexLastPokemon);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllPokemons())
    }, 2000);
    window.scrollTo({ top: 0 });
  }, [currentPokemons,dispatch]);

  // console.log(pokemons.length, "list");
  return (
    <div>
      {
        /* loading === true ? (
        <Loading setLoading={setLoading} />
      ) */
        !pokemons.length ? (
          <Loading /* setLoading={setLoading} */ />
        ) : (
          <div>
            <div className="container1" id="demo">
              <ul>
                {pokemons ? (
                  currentPokemons.map((p) => {
                    return <li key={p}>{p}</li>;
                  })
                ) : (
                  <h1>Lost Connection to the Pokedatabase</h1>
                )}
              </ul>
            </div>
            <br/>
            <Pagination
              pokemonsPerPage={pokemonsPerPage}
              pokemonsLength={pokemons.length}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        )
      }
    </div>
  );
}
