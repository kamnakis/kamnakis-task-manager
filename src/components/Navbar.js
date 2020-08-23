import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.svg'

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <div className="h-16 flex justify-between items-center px-8 bg-yellow-500 z-10 shadow-md">
      <NavLink className="flex items-center space-x-6" to="/">
        <img src={logo} alt="task manager" className="h-12" />
        <h1 className="text-2xl text-gray-800">TASK MANAGER</h1>
      </NavLink>

      <div className="hidden sm:flex space-x-8 font-medium text-lg items-center justify-around">
        <NavLink to="/" exact activeClassName='navLink-active'>Home</NavLink>
        <NavLink to="/signup" exact activeClassName='navLink-active'>Sign Up</NavLink>
        <NavLink to="/login" exact activeClassName='navLink-active'>Login</NavLink>
        <NavLink to="/demo" exact activeClassName='navLink-active' className="bg-white text-yellow-600 tracking-wider py-2 px-4 rounded-md hover:shadow-lg">TRY DEMO</NavLink>
      </div>

      <div className="sm:hidden">
        <FontAwesomeIcon icon={faBars} className="text-xl cursor-pointer" onClick={() => setMenuVisible(!menuVisible)} />
        {
          menuVisible &&
          <div className="fixed left-0 right-0 top-0 mt-16 bg-yellow-500 flex flex-col items-center justify-center py-4 space-y-2 text-lg">
            <NavLink to="/" exact activeClassName='navLink-active'>Home</NavLink>
            <NavLink to="/signup" exact activeClassName='navLink-active'>Sign Up</NavLink>
            <NavLink to="/login" exact activeClassName='navLink-active'>Login</NavLink>
            <NavLink to="/demo" exact activeClassName='navLink-active' className="bg-white text-yellow-600 tracking-wider py-1 px-2 rounded-md hover:shadow-lg">TRY DEMO</NavLink>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
