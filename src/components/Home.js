import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="min-h-auto flex-grow flex items-center justify-center">
        Home Page
      </div>
    </div>
  )
}

export default Home
