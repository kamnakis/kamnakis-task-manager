import React, { useEffect, useReducer, useState } from 'react'
import { useAlert } from 'react-alert'

import api from '../utils/demo_api'
import tasks_reducer from '../reducers/tasks'
import profile_reducer from '../reducers/profile'
import Context from '../context/Context'

import Toolbar from './Toolbar'
import TaskSection from './TaskSection'
import Loading from './Loading'

const Demo = ({ history }) => {
  const alert = useAlert()
  const [tasks, dispatch] = useReducer(tasks_reducer, [])
  const [profile, dispatchProfile] = useReducer(profile_reducer, { name: '', email: '', age: 0 })

  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)

    try {
      const data = await api.GET_TASKS('sortBy=createdAt_desc')
      dispatch({ type: 'INITIALIZE', data })
      setIsLoading(false)
    } catch (error) {
      alert.show('Something went wrong!')
      setIsLoading(false)
    }
  }

  const getProfile = async () => {
    setIsLoading(true)

    try {
      const profile = await api.GET_PROFILE()
      dispatchProfile({ type: 'INITIALIZE', profile })
      getData()
    } catch (error) {
      alert.show('Something went wrong!')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <Context.Provider value={{ tasks, dispatch, profile, dispatchProfile, history, api }}>
      <Loading isLoading={isLoading} />
      <div className="min-h-screen flex flex-col">
        <Toolbar profile={profile} history={history} />
        <div className="min-h-auto bg-gradient-to-b from-yellow-500 to-yellow-600 flex-grow flex justify-center">
          <TaskSection />
        </div>
      </div>
    </Context.Provider>
  )
}

export default Demo
