

export const palabraCapitalize = (palabra) => {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
}

export const obtenerTipoPokemon = (array) => {
  return array.type.name
}