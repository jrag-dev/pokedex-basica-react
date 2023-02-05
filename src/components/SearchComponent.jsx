import React, { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";


import "../styles/components/SearchComponent.css";
import PokemonContext from '../context/pokemons/pokemonContext';
import { useNavigate } from 'react-router-dom';


const SearchComponent = () => {

  const navigate = useNavigate();

  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (search.trim().length === '' ) {
      return;
    }

    console.log(search)
    

    navigate("/pokemon/search", {
      state: search
    })


    setSearch("")

  }

  return (
    <div className="search">
      <form 
      className="form"
      onSubmit={handleSubmit}
      >
      <input 
        type="text" 
        name="text" 
        placeholder="Buscar produto por nombre"
        className="search-input"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button className="search-btn" type="submit"><BsSearch className='search-icon'/></button>
    </form>
    </div>
  )
}

export default SearchComponent
