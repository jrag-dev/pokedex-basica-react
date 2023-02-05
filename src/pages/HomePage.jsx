import React, { useContext, useEffect, useMemo, useState } from 'react'
import PokemonContext from '../context/pokemons/pokemonContext'
import PokemonComponent from '../components/PokemonComponent';

import "../styles/pages/HomePage.css";
import { obtenerPokemons, useStore } from '../store';


const HomePage = () => {

  const { pokemons, loading, error } = useStore( state => state)

  const [offsetValor, setOffsetValor] = useState(0)

  // const poke = useMemo(() => obtenerPokemons(offsetValor), [offsetValor])
  // console.log(poke)

  useEffect(() => {
    console.log("USE EFFECT REDERIZO")
    console.log("OFFSET: ", setOffsetValor)
    obtenerPokemons(offsetValor)
  }, [offsetValor])

  if (loading) return <div className="loading">Cargando...</div>


  return (
    <section className="home">
      <h2 className="titulo">Listado de Pokemones</h2>

      <article className="pokemons">
        {
          error ? (
            <div className="error">Error</div>
          ) : (
            pokemons.map(pokemon => (
              <PokemonComponent
                key={pokemon.name}
                pokemon={pokemon}
              />
            ))
          )
        }
      </article>

      <div className="container-load-mas">

        {
          pokemons.length > 0
          ? (
            <button className="btn-load-mas" onClick={() => setOffsetValor(offsetValor + 25)}>
            Cargar más
          </button>
          ) : (
            <div className="loading">Cargando...</div>
          )
        }
      </div>
      
    </section>
  )
}

export default HomePage