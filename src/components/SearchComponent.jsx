import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";


import "../styles/components/SearchComponent.css";


const SearchComponent = () => {

  const [search, setSearch] = useState("")

  const handleSubmit = () => {
    console.log("Submit Form Search")
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
