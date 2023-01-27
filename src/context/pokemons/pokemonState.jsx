import { useReducer } from "react"

import PokemonContext from "./pokemonContext"
import pokemonReducer from "./pokemonReducer"
import clienteAxios from "../../config/axios"

import { OBTENER_POKEMON, OBTENER_POKEMONS, OBTENER_POKEMONS_ERROR, OBTENER_POKEMONS_SUCCESS, OBTENER_POKEMON_ERROR, OBTENER_POKEMON_SUCCESS } from "../../types"




const PokemonState = ({ children }) => {

  const initialState = {
    pokemons: [],
    pokemon: null,
    loading: false,
    error: null
  }

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  // Funciones que cambiarán el state de pokemones

  const obtenerPokemons = async () => {

    dispatch({
      type: OBTENER_POKEMONS
    })

    try {
      const resp = await clienteAxios.get('?limit=24&offset=0')

      let pokedata = []

      const pokes = resp.data.results.map( async (pokemon) => {
        const respuesta = await clienteAxios.get(pokemon.url)
        return await respuesta.data
      })

      const result = await Promise.all(pokes)

      dispatch({
        type: OBTENER_POKEMONS_SUCCESS,
        payload: result
      })

    } catch (error) {
      console.log(error)
      dispatch({
        type: OBTENER_POKEMONS_ERROR
      })
    }
  }


  const obtenerPokemon = async (id) => {

    dispatch({
      type: OBTENER_POKEMON
    })

    try {
      const resp = await clienteAxios.get(`/${id}`)
      console.log(resp.data)
      dispatch({
        type: OBTENER_POKEMON_SUCCESS,
        payload: resp.data
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: OBTENER_POKEMON_ERROR
      })
    }
  }


  const datos = {
    pokemons: state.pokemons,
    pokemon: state.pokemon,
    loading: state.loading,
    error: state.error,
    obtenerPokemons,
    obtenerPokemon
  }

  return (
    <PokemonContext.Provider value={datos}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonState;