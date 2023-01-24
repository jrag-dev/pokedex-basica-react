import React from 'react'

import "../styles/components/PokemonComponent.css";
import { obtenerTipoPokemon, palabraCapitalize } from '../utils';
import { Link } from 'react-router-dom';

const PokemonComponent = ({ pokemon }) => {

  return (
    <div className="pokemon">
      <Link to={`/pokemon/${pokemon.id}`}>
        <div className="pokemon-img">
          <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name}/>
        </div>
        <div className="pokemon-body">
          <h3>{palabraCapitalize(pokemon.name)}</h3>
        </div>
        <div className="pokemon-footer">
            {
              pokemon.types.map((type, index) => 
                <button className={`${obtenerTipoPokemon(type)}`} key={index}>
                  {type.type.name}
                </button>
              )
            }
        </div>
      </Link>
    </div>
  )
}

export default PokemonComponent;