import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'
import FilterBarraComponent from '../components/FilterBarraComponent'

const LayoutPublic = () => {
  return (
    <div className="app">
      <header className="header">
        <HeaderComponent/>  
      </header>
        <FilterBarraComponent/>
      <aside className="sidebar">
        Sidebar
      </aside>
      <main className="main container">
        <Outlet/>
      </main>
    </div>
  )
}

export default LayoutPublic
