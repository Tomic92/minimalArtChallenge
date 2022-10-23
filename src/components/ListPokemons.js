import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllPokemons } from "../redux/actions";
import "./../styles/listPokemons.css";
import Loading from "./Loading";
import Pagination from "./Pagination";

export default function ListPokemons() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 150;

  const indexLastPokemon = currentPage * pokemonsPerPage;
  const indexFirstPokemon = indexLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexFirstPokemon, indexLastPokemon);

  let pokeDiv = document.getElementById("pokeId");
  function scrollTop() {
    pokeDiv.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllPokemons());
    }, 2000);
  }, [currentPokemons, dispatch]);

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
            <div className="pokeContainer" id="pokeId">
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
            <br />
            <Pagination
              pokemonsPerPage={pokemonsPerPage}
              pokemonsLength={pokemons.length}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              scrollTop={scrollTop}
            />
          </div>
        )
      }
    </div>
  );
}
