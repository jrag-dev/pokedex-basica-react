import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PokemonContext from '../context/pokemons/pokemonContext';
import { obtenerTipoPokemon, palabraCapitalize } from '../utils';

import "../styles/pages/PokemonPage.css"

const PokemonPage = () => {

  const { id } = useParams()
  const { pokemon, loading, error, obtenerPokemon } = useContext(PokemonContext);

  console.log(pokemon)
  
  useEffect(() => {
    obtenerPokemon(id)
  }, [])
  
  if (loading) return <div>Loading...</div>

  return (
    <section className="pokemon-page">


      {
        pokemon && (
          <>
            <h2 className="titulo">{palabraCapitalize(pokemon.name)}</h2>
            <article className="poke-detalles">
    
              <div className="poke-header">
                  <div className="poke-img">
                    <div className="poke-id">#{id}</div>
                    <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name}/>
                  </div>
                  <div className="poke-footer">
                      {
                        pokemon.types.map((type, index) => 
                          <button className={`poke-${obtenerTipoPokemon(type)}`} key={index}>
                            {type.type.name}
                          </button>
                        )
                      }
                  </div>
              </div>

              <article className="poke-estadisticas">
                <h2 className="text-center">Estadísticas: </h2>

                {
                  pokemon.stats.map((stat, index) => (
                    <div className="progress" key={index}>
                      <p>
                        <b>{palabraCapitalize(stat.stat.name)}</b>
                        <b>{stat.base_stat}</b>
                      </p>
                      <progress value={stat.base_stat} min="0" max="100"></progress>
                    </div>
                  ))
                }
              </article>
            </article>
          </>
        )
      }

    </section>
  )
}

export default PokemonPage;