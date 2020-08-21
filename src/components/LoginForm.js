import React, { useState } from 'react'
import axios from 'axios'
import { api_url } from '../utils/api_settings'

const LoginForm = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePassowrdChange = (e) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    axios.post(`${api_url}/users/login`, {
      email,
      password
    }).then(res => {
      localStorage.setItem('taskManagerToken', res.data.token)
      props.history.push('/dashboard')
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <input
          className="shadow-md text-lg py-2 px-2 rounded-lg focus:outline-none my-2"
          placeholder="email"
          type="email"
          required
          value={email}
          onChange={handleEmailChange}
        />

        <input
          className="shadow-md text-lg py-2 px-2 rounded-lg focus:outline-none my-2"
          placeholder="password"
          type="password"
          required
          value={password}
          onChange={handlePassowrdChange}
        />

        <label className="flex text-gray-500 font-bold items-center mt-4">
          <input className="mr-2 leading-tight" type="checkbox" />
          <span className="text-sm">Keep me logged in!</span>
        </label>

        <button className="shadow-md text-lg py-1 px-2 rounded-lg focus:outline-none bg-yellow-500 mt-4">Login</button>
      </form>
    </>
  )
}

export default LoginForm
