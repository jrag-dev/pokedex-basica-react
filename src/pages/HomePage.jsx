import React, { useContext, useEffect } from 'react'
import PokemonContext from '../context/pokemons/pokemonContext'
import PokemonComponent from '../components/PokemonComponent';

import "../styles/pages/HomePage.css";


const HomePage = () => {

  const { pokemons, loading, error, obtenerPokemons } = useContext(PokemonContext);

  useEffect(() => {
    obtenerPokemons()
  }, [])

  if (loading) return <div className="loader">Loading...</div>;


  return (
    <section className="home container">
      <h2>Listado de Pokemones</h2>

      <article className="pokemons">
        {
          error ? (
            <div className="error">Error</div>
          ) : (
            pokemons.map(pokemon => (
              <PokemonComponent
                key={pokemon.id}
                pokemon={pokemon}
              />
            ))
          )
        }
      </article>
      
    </section>
  )
}

export default HomePage