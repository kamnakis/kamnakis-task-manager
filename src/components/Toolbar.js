import React from 'react'
import logo from '../images/logo.svg'
import Dropdown from './Dropdown'
import { NavLink } from 'react-router-dom'

const Toolbar = ({ profile, history }) => {
  return (
    <div className="h-auto sm:h-16 flex flex-col sm:flex-row justify-between items-center py-2 sm:py-0 px-8 bg-yellow-500 z-10 shadow-md">
      <NavLink to="/">
        <div className="flex justify-center items-center space-x-2">
          <img src={logo} alt="task manager" className="h-12" />
          <h1 className="text-2xl text-gray-800">TASK MANAGER</h1>
        </div>
      </NavLink>

      <div className="flex justify-center items-center space-x-2">
        <Dropdown label={`${profile.name}, ${profile.age}`} history={history} />
      </div>

    </div>
  )
}

export default Toolbar
