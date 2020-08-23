import React, { useContext, useState, useEffect } from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useAlert } from 'react-alert'

import Context from '../context/Context'
import api from '../utils/api'

import Loading from './Loading'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    zIndex: "15",
    background: "rgba(0, 0, 0, 0.5)"
  }
};
Modal.setAppElement(document.getElementById('root'))

const SettingsModal = ({ isOpen, onRequestClose }) => {
  const { profile, dispatchProfile, history } = useContext(Context)
  const [isLoading, setIsLoading] = useState(false)
  const alert = useAlert()

  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [age, setAge] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState('')
  const [vpassword, setVpassword] = useState('')

  useEffect(() => {
    setFname(profile.name.split(" ")[0])
    setLname(profile.name.split(" ")[1])
    setAge(profile.age)
    setEmail(profile.email)
  }, [profile])

  const onFnameChange = (e) => {
    setFname(e.target.value)
  }

  const onLnameChange = (e) => {
    setLname(e.target.value)
  }

  const onAgeChange = (e) => {
    setAge(e.target.value)
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onVpasswordChange = (e) => {
    setVpassword(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    let updates = null
    if ((fname && lname && email && age) && (fname !== profile.name.split(" ")[0] || lname !== profile.name.split(" ")[1] || email !== profile.email || age !== profile.age)) {
      updates = {
        name: `${fname} ${lname}`,
        age: parseInt(age),
        email
      }
    } else {
      if (!(fname && lname && email && age)) alert.show('There is an empty field')
    }

    if (password && password === vpassword) {
      updates = {
        password
      }
    } else {
      if (password) alert.show('Passwords don\'t match')
    }

    if (updates) {
      setIsLoading(true)
      const res = await api.UPDATE_PROFILE(updates)
      dispatchProfile({ type: 'INITIALIZE', profile: res })
      setIsLoading(false)
    }
  }

  const logoutAll = async () => {
    if (window.confirm("Do you really want to logout from all devices?")) {
      setIsLoading(true)

      try {
        await api.USER_LOGOUT_ALL()
        setIsLoading(false)
        localStorage.removeItem('taskManagerToken')
        history.push('/')
      } catch (error) {
        alert.show('Something went wrong!')
        setIsLoading(false)
      }
    }
  }

  const removeAccount = async () => {
    if (window.confirm("Do you really want to delete your account?")) {
      setIsLoading(true)

      try {
        await api.REMOVE_PROFILE()
        setIsLoading(false)
        localStorage.removeItem('taskManagerToken')
        history.push('/')
      } catch (error) {
        alert.show('Something went wrong!')
        setIsLoading(false)
      }

    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl">Settings</h2>
        <FontAwesomeIcon icon={faTimes} onClick={onRequestClose} className="cursor-pointer" />
      </div>

      <div>
        <form className="flex flex-wrap flex-col space-y-4 tracking-wider p-2" onSubmit={handleFormSubmit}>
          <div>
            <h1 className="text-lg p-2 text-gray-700">Change Personal Information</h1>
            <input type="text" placeholder="First Name" className="p-2" value={fname || ''} onChange={onFnameChange} />
            <input type="text" placeholder="Last Name" className="p-2" value={lname || ''} onChange={onLnameChange} />
            <input type="number" placeholder="Age" className="p-2" min="0" value={age || 0} onChange={onAgeChange} />
          </div>
          <div className="flex-grow">
            <h1 className="text-lg p-2 text-gray-700">Change Account Settings</h1>
            <input type="email" placeholder="Email" className="w-full p-2" value={email || ''} onChange={onEmailChange} />
          </div>
          <div className="flex-grow">
            <h1 className="text-lg p-2 text-gray-700">Change Password</h1>
            <input type="password" placeholder="Password" className="p-2 w-1/2" value={password} onChange={onPasswordChange} />
            <input type="password" placeholder="Verify Password" className="p-2 w-1/2" value={vpassword} onChange={onVpasswordChange} />
          </div>
          <button type="submit" className="bg-yellow-500 p-2 rounded-lg">Save</button>
          <h1 className="text-orange-600 text-md text-center cursor-pointer" onClick={logoutAll}>Logout from all devices</h1>
          <h1 className="text-red-700 text-md text-center cursor-pointer" onClick={removeAccount}>Delete Account</h1>
        </form>
      </div>
      <Loading isLoading={isLoading} />
    </Modal>
  )
}

export default SettingsModal
