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
  <Link to="#" className="more">Más</Link>
  <div className="submenu">
  <NavLink to="#">Perfil</NavLink>
  </div>
</div>
</div>
</nav>