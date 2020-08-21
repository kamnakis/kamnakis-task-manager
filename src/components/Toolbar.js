import React from 'react'
import logo from '../images/logo.svg'
import Dropdown from './Dropdown'

const Toolbar = ({ profile, history }) => {
  return (
    <div className="h-16 flex justify-between items-center px-8 bg-yellow-500 z-10 shadow-md">
      <div className="flex justify-center items-center space-x-2">
        <img src={logo} alt="task manager" className="h-12" />
        <h1 className="text-2xl text-gray-800">TASK MANAGER</h1>
      </div>

      <div className="flex justify-center items-center space-x-2">
        <Dropdown label={profile.name} history={history} />
      </div>

    </div>
  )
}

export default Toolbar
