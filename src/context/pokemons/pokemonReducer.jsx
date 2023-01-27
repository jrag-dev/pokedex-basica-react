import { 
  OBTENER_POKEMON,
  OBTENER_POKEMONS, 
  OBTENER_POKEMONS_ERROR, 
  OBTENER_POKEMONS_SUCCESS, 
  OBTENER_POKEMON_ERROR, 
  OBTENER_POKEMON_SUCCESS
} from "../../types"



export default (state, action) => {
  switch (action.type) {
    case OBTENER_POKEMON:
    case OBTENER_POKEMONS:
      return {
        ...state,
        loading: true
      }
    case OBTENER_POKEMONS_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        pokemons: action.payload,
        error: false,
        loading: false
      }
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
        loading: false
      }
    default:
      return state;
  }
}