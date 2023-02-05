import React, { useState } from 'react';

import '../styles/components/HeaderComponent.css';
import { Link, NavLink } from 'react-router-dom';


import "../styles/components/HeaderComponent.css"
import SearchComponent from './SearchComponent';

const HeaderComponent = () => {

  return (
    <nav className="container">
      <div className="mobile">
        <div className="mobile-header">
          <div className="logo">
            <img src="/pokedex.svg" alt="pokedex"/>
          </div>
        </div>
        <div className="buscador">
          <SearchComponent/>
        </div>
      </div>

    <div className="desktop">
      <div className="logo">
        <Link to="/"><img src="/pokedex.svg" alt="pokedex"/></Link>
      </div>

      <div className="primary">
        <SearchComponent/>
      </div>

      <div className="secondary full">
        <NavLink to="/">Pokemones</NavLink>
      </div>

      <div className="secondary mini">
        <NavLink to="/">Pokemones</NavLink>
      </div>
    </div>
  </nav>
  )
}

export default HeaderComponent
