import React from 'react'
import Navbar from './Navbar'
import Background from '../images/bg.jpg'
import logo from '../images/logo.svg'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative min-h-auto flex-grow flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 flex flex-col sm:flex-row items-center justify-center">
          <img src={logo} alt="task manager" className="sm:mr-12" />
          <div className="text-white text-5xl tracking-widest font-semibold text-center sm:text-left">
            <h1>TASK</h1>
            <h1>MANAGER</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
