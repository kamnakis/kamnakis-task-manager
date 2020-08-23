import React from 'react'
import Navbar from './Navbar'
import LoginForm from './LoginForm'
import Background from '../images/bg.jpg'
import logo from '../images/logo.svg'

const Login = (props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative min-h-auto bg-gradient-to-b from-yellow-500 to-gray-500 flex-grow flex items-center justify-center p-2 bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}>
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center p-2">
          <div className="max-w-2xl w-full sm:w-3/4 bg-white flex p-10 rounded-lg shadow-xl flex-col sm:flex-row">
            <img src={logo} alt="task manager" className="sm:mr-12" />
            <LoginForm history={props.history} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
