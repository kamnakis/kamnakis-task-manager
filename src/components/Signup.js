import React from 'react'
import Navbar from './Navbar'
import SignupForm from './SignupForm'
import logo from '../images/logo.svg'

const Signup = (props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="min-h-auto bg-gradient-to-b from-yellow-500 to-gray-500 flex-grow flex items-center justify-center">
        <div className="bg-white flex p-10 rounded-lg shadow-xl">
          <img src={logo} alt="task manager" className="mr-12" />
          <SignupForm history={props.history} />
        </div>
      </div>
    </div>
  )
}

export default Signup
