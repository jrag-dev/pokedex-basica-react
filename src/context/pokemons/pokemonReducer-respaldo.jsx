import { 
  OBTENER_POKEMON,
  OBTENER_POKEMONS, 
  OBTENER_POKEMONS_ERROR, 
  OBTENER_POKEMONS_GLOBAL, 
  OBTENER_POKEMONS_GLOBAL_ERROR, 
  OBTENER_POKEMONS_GLOBAL_SUCCESS, 
  OBTENER_POKEMONS_SUCCESS, 
  OBTENER_POKEMON_ERROR, 
  OBTENER_TERMINO_ERROR, 
  OBTENER_POKEMON_SEARCH_SUCCESS, 
  OBTENER_POKEMON_SUCCESS,
  OBTENER_TERMINO_SUCCESS,
  CAMBIAR_OFFSET
} from "../../types"



export default (state, action) => {
  switch (action.type) {
    case OBTENER_POKEMONS_GLOBAL:
    case OBTENER_POKEMON:
    case OBTENER_POKEMONS:
      return {
        ...state,
        loading: true
      }
    case OBTENER_POKEMONS_GLOBAL_SUCCESS:
      return {
        ...state,
        pokemons_global: action.payload,
        loading: false,
        error: false
      }
    case OBTENER_POKEMONS_SUCCESS:
      console.log("action.payload: ", action.payload)
      console.log("state.pokemons: ", state.pokemons)
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload],
        error: false,
        loading: false
      }
    case OBTENER_POKEMONS_GLOBAL_ERROR:
    case OBTENER_POKEMON_ERROR:
    case OBTENER_POKEMONS_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    case OBTENER_POKEMON_SUCCESS:
      return {
        ...state,
        error: false,
        pokemon: action.payload,
        pokemon_search: {},
        loading: false
      }
    case OBTENER_TERMINO_SUCCESS:
      return {
        ...state,
        error: false,
        search: action.payload,
        loading: false
      }
    case OBTENER_TERMINO_ERROR:
      return {
        ...state,
        error: action.payload,
        search: "",
        loading: false
      }
    case CAMBIAR_OFFSET:
      return {
        ...state,
        offset: action.payload
      }
    default:
      return state;
  }
}