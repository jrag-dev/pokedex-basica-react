import { useReducer } from "react"

import PokemonContext from "./pokemonContext"
import pokemonReducer from "./pokemonReducer"
import clienteAxios from "../../config/axios"

import { CAMBIAR_OFFSET, OBTENER_POKEMON, OBTENER_POKEMONS, OBTENER_POKEMONS_ERROR, OBTENER_POKEMONS_GLOBAL, OBTENER_POKEMONS_GLOBAL_ERROR, OBTENER_POKEMONS_GLOBAL_SUCCESS, OBTENER_POKEMONS_SUCCESS, OBTENER_POKEMON_ERROR, OBTENER_POKEMON_SEARCH_ERROR, OBTENER_POKEMON_SEARCH_SUCCESS, OBTENER_POKEMON_SUCCESS, OBTENER_TERMINO_ERROR, OBTENER_TERMINO_SUCCESS } from "../../types"




const PokemonState = ({ children }) => {

  const initialState = {
    pokemons_global: [],
    pokemons: [],
    offset: 0,
    pokemon: null,
    search: "",
    loading: false,
    error: null
  }

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  // Funciones que cambiarán el state de pokemones

  const cambiarOffset = (valor) => {
    console.log(valor)
    dispatch({
      type: CAMBIAR_OFFSET,
      payload: valor
    })
  }

  const obtenerGlobalPokemons = async () => {

    dispatch({
      type: OBTENER_POKEMONS_GLOBAL
    })

    try {
      const resp = await clienteAxios.get('?limit=100000&offset=0');

      const pokes = resp.data.results.map( async (pokemon) => {
        const respuesta = await clienteAxios.get(pokemon.url)
        return await respuesta.data
      })

      const result = await Promise.all(pokes)

      dispatch({
        type: OBTENER_POKEMONS_GLOBAL_SUCCESS,
        payload: result
      })

    } catch (error) {
      console.log(error)
      dispatch({
        type: OBTENER_POKEMONS_GLOBAL_ERROR
      })
    }
  }

  const obtenerPokemons = async (limit, offset) => {

    console.log({
      "limit": limit,
      "offset": offset
    })

    dispatch({
      type: OBTENER_POKEMONS
    })

    try {
      const resp = await clienteAxios.get(`?limit=${limit}&offset=${offset}`)

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

  // TODO: Busqueda de pokemon por su nombre
  const searchTerm = ( name ) => {
    console.log("name: ", name)
    try {

      dispatch({
        type: OBTENER_TERMINO_SUCCESS,
        payload: name
      })
  
    } catch (error) {
      dispatch({
        type: OBTENER_TERMINO_ERROR,
        payload: "Pokemon no encontrado."
      })
    }
  }

  // TODO: Cargar más pokemones
  const onClickLoadMore = async (limit, offset) => {
    dispatch({
      type: OBTENER_POKEMONS
    })

    try {
      const resp = await clienteAxios.get(`?limit=${limit}&offset=${offset}`)

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


  const datos = {
    pokemons_global: state.pokemons_global,
    pokemons: state.pokemons,
    pokemon: state.pokemon,
    offset: state.offset,
    pokemon_search: state.pokemon_search,
    loading: state.loading,
    error: state.error,
    obtenerGlobalPokemons,
    obtenerPokemons,
    obtenerPokemon,
    searchTerm,
    onClickLoadMore,
    cambiarOffset
  }

  return (
    <PokemonContext.Provider value={datos}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonState;