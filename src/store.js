import { create } from "zustand";
import { createPokemonSlice } from "./stores/pokemonSlice";
import { createPokemonsSlice } from "./stores/pokemonsSlice";



export const useStore = create(
  (...a) => ({
    ...createPokemonSlice(...a),
    ...createPokemonsSlice(...a)
  })
)

export const obtenerPokemons = async (offset) => {
  console.log("zustand", offset);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`);
  let data = await response.json();

  const pokes = data.results.map( async pokemon => {
    const response = await fetch(pokemon.url);
    let datos = await response.json();
    return datos;
  })

  const result = await Promise.all(pokes);

  if (!result) {
    return useStore.setState( state => ({ 
      pokemons: [],
      loading: false,
      error: true
    }))
  }
  console.log(result);

  return useStore.setState( state => ({ 
    pokemons: [ ...state.pokemons, ...result],
    loading: false,
    error: false
  }))
}

export const obtenerPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  if(!data) {
    return useStore.setState( state => ({ 
      pokemons: null,
      loading: false,
      error: true
    }))
  }

  return useStore.setState( state => ({
    loading: false,
    error: false,
    pokemon: data,
    pokemons: []
  }))
}