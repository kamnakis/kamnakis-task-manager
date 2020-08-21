import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { api_url, headers } from '../utils/api_settings'
import Toolbar from './Toolbar'
import TaskSection from './TaskSection'

const Dashboard = (props) => {
  const [profile, setProfile] = useState({name: '', email: '', age: 0})

  useEffect(() => {
    axios.get(`${api_url}/users/me`, { headers: headers(localStorage.getItem('taskManagerToken')) }).then((res) => {
      setProfile(res.data)
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Toolbar profile={profile} history={props.history} />
      <div className="min-h-auto bg-gradient-to-b from-yellow-500 to-gray-500 flex-grow flex justify-center items-center">
        <TaskSection />
      </div>
    </div>
  )
}

export default Dashboard
