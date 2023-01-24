import React from 'react'
import ReactDOM from 'react-dom/client'

import { router } from './router';

import './styles/main.css'

import { RouterProvider } from 'react-router-dom'
import PokemonState from './context/pokemons/pokemonState';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonState>
      <RouterProvider router={router} />
    </PokemonState>
  </React.StrictMode>
)
