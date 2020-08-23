import React, { useState } from 'react'
import api from '../utils/api'
import Loading from './Loading'
import { useAlert } from 'react-alert'

const SignupForm = (props) => {
  const alert = useAlert()
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [vpassword, setVpassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleFnameChange = (e) => {
    setFname(e.target.value)
  }

  const handleLnameChange = (e) => {
    setLname(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleVpassowrdChange = (e) => {
    setVpassword(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (password === vpassword) {
      try {
        const res = await api.SIGNUP_USER({ fname, lname, email, password })
        localStorage.setItem('taskManagerToken', res.token)
        props.history.push('/dashboard')
      } catch (error) {
        alert.show('email already in use')
        setIsLoading(false)
      }
    } else {
      alert.show('Passwords don\'t match')
      setIsLoading(false)
    }
  }

  return (
    <>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <input
          className="shadow-md text-lg py-2 px-2 rounded-lg focus:outline-none my-2"
          placeholder="first name"
          type="text"
          required
          value={fname}
          onChange={handleFnameChange}
        />

        <input
          className="shadow-md text-lg py-2 px-2 rounded-lg focus:outline-none my-2"
          placeholder="last name"
          type="text"
          required
          value={lname}
          onChange={handleLnameChange}
        />

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
          onChange={handlePasswordChange}
        />

        <input
          className="shadow-md text-lg py-2 px-2 rounded-lg focus:outline-none my-2"
          placeholder="verify password"
          type="password"
          required
          value={vpassword}
          onChange={handleVpassowrdChange}
        />

        <label className="flex text-gray-500 font-bold items-center mt-4">
          <input className="mr-2 leading-tight" type="checkbox" required />
          <span className="text-sm">I agree with terms n' shit!</span>
        </label>
        <button className="shadow-md text-lg py-1 px-2 rounded-lg focus:outline-none bg-yellow-500 mt-4">Sign Up</button>
      </form>
      <Loading isLoading={isLoading} />
    </>
  )
}

export default SignupForm
