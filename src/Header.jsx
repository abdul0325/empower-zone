
import React from 'react'
import Home from './components/home/home'
import Navbar from './components/navbar/Navbar'
import AppRoutes from './routes'

function Header() {
  return (
    <div>
        
        <Navbar />
        <AppRoutes />
    </div>
  )
}

export default Header