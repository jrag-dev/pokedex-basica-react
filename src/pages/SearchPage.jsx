import React, { useContext } from 'react'
import PokemonContext from '../context/pokemons/pokemonContext'
import { useLocation } from 'react-router-dom';
import PokemonComponent from '../components/PokemonComponent';


import "../styles/pages/SearchPage.css";
import { useStore } from '../store';

const SearchPage = () => {

  const location = useLocation();

  console.log(location)

  const { pokemons } = useStore( state => state )

  const pokemonsFiltered = pokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))

  console.log(pokemonsFiltered)
  return (
    <article className="search-page">
      <p className="search-page-titulo">
        Se encontrarón <span>{pokemonsFiltered.length}</span> resultados
      </p>
      <div className="search-page-flex">
        {
          pokemonsFiltered.map(pokemon => (
            <PokemonComponent pokemon={pokemon} key={pokemon.name}/>
          ))
        }
      </div>
    </article>
  )
}

export default SearchPage
