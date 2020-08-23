import React, { useState } from 'react'
import Loading from './Loading'
import api from '../utils/api'
import { useAlert } from 'react-alert'

const LoginForm = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const alert = useAlert()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePassowrdChange = (e) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const res = await api.USER_LOGIN({ email, password })
      localStorage.setItem('taskManagerToken', res.token)
      props.history.push('/dashboard')
    } catch (error) {
      alert.show('email or password is incorrect')
      setIsLoading(false)
    }

  }

  return (
    <>
      <form className="w-full flex flex-col" onSubmit={handleFormSubmit}>
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
      <Loading isLoading={isLoading} />
    </>
  )
}

export default LoginForm
