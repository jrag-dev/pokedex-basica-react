import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { FaUserCircle, FaCartPlus } from "react-icons/fa";


import '../styles/components/HeaderComponent.css';
import { Link, NavLink } from 'react-router-dom';


import "../styles/components/HeaderComponent.css"
import SearchComponent from './SearchComponent';

const HeaderComponent = () => {

  const [openMenu, setOpenMenu] = useState(true);


  const handlerClickMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className="container">
      <div className="mobile">
        <div className="mobile-header">
        <div className="logo">
          <img src="/pokedex.svg" alt="pokedex"/>
        </div>
          <div className="more">
            <button className="btn-more" onClick={() => handlerClickMenu()}>
            <HiMenu className="icon-menu"/>
            </button>
          </div>
        </div>
        <div className={`links ${openMenu ? 'collapsed' : null}`}>
            <NavLink to="/">Favoritos</NavLink>
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
        <NavLink to="#">Crear Cuenta</NavLink>
        <NavLink to="#">Iniciar Sesión</NavLink>
      </div>

      <div className="secondary mini">
        <Link to="#" className="more">Más</Link>
        <div className="submenu">
        <NavLink to="#">Perfil</NavLink>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default HeaderComponent
