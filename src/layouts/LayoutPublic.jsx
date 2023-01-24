import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <div className="app">
      <header className="header">
        header  
      </header>
      <aside className="sidebar">
        sidebar
      </aside>
      <main className="main">
        <Outlet/>
      </main>
      <footer className="footer">
        footer
      </footer>
    </div>
  )
}

export default LayoutPublic
