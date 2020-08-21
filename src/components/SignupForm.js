import React, { useState } from 'react'
import axios from 'axios'
import { api_url } from '../utils/api_settings'

const SignupForm = (props) => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [vpassword, setVpassword] = useState('')

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

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (password === vpassword) {
      axios.post(`${api_url}/users`, {
        name: `${fname} ${lname}`,
        email,
        password
      }).then(res => {
        localStorage.setItem('taskManagerToken', res.data.token)
        props.history.push('/dashboard')
      })
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
    </>
  )
}

export default SignupForm
