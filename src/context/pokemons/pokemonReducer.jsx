import { 
  OBTENER_POKEMONS, 
  OBTENER_POKEMONS_ERROR, 
  OBTENER_POKEMONS_SUCCESS 
} from "../../types"



export default (state, action) => {
  switch (action.type) {
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
    case OBTENER_POKEMONS_ERROR:
      return {
        error: true,
        loading: false
      }
    default:
      return state;
  }
}