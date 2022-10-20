import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons } from '../redux/actions';
import Loading from './Loading'

export default function ListPokemons() {
  const pokemons = useSelector((state) => state.pokemon);
  const [loading, setLoading] = useState(true);

  console.log(pokemons,"list");

  useEffect(()=>{
  },[])

  return (
    <div>
      <ol>
        {
          pokemons ? pokemons.map(p=>{
            return(
              <li>{p}</li>
            )
          }) : <Loading />
        }
      </ol>
    </div>
  )
}
