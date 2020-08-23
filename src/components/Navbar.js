import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <div className="h-16 flex justify-between items-center px-8 bg-yellow-500 z-10 shadow-md">
      <NavLink className="flex items-center space-x-6" to="/">
        <img src={logo} alt="task manager" className="h-12" />
        <h1 className="text-2xl text-gray-800">TASK MANAGER</h1>
      </NavLink>

      <div className="space-x-8 font-medium text-lg">
        <NavLink to="/" exact activeClassName='navLink-active'>Home</NavLink>
        <NavLink to="/signup" exact activeClassName='navLink-active'>Sign Up</NavLink>
        <NavLink to="/login" exact activeClassName='navLink-active'>Login</NavLink>
        <NavLink to="/demo" exact activeClassName='navLink-active' className="bg-white text-yellow-600 tracking-wider py-2 px-4 rounded-md hover:shadow-lg">TRY DEMO</NavLink>
      </div>
    </div>
  )
}

export default Navbar
