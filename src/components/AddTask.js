import React, { useState, useContext } from 'react'
import { useAlert } from 'react-alert'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import Context from '../context/Context'
import Loading from './Loading'
import api from '../utils/api'

const AddTask = () => {
  const { dispatch } = useContext(Context)
  const [isAdding, setIsAdding] = useState(false)
  const alert = useAlert()

  const [completed, setCompleted] = useState(false)
  const [description, setDescription] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const handleCompletedChange = (e) => {
    setCompleted(e.target.checked)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const toggleAddFormVisibility = () => {
    setIsAdding(!isAdding)
    setCompleted(false)
    setDescription('')
  }

  const handleAddTask = async () => {
    const task = {
      completed,
      description
    }

    if (description.trim()) {
      setIsLoading(true)

      try {
        const newTask = await api.ADD_TASK(task)
        dispatch({ type: 'ADD_TASK', task: newTask })
        alert.success('Task created!')
      } catch (error) {
        alert.show('Something went wrong!')
      }

      setIsLoading(false)
      toggleAddFormVisibility()
    }
  }

  return (
    <div className="transition-shadow duration-200 hover:shadow-xl">
      <div className={`${isAdding ? completed ? 'bg-teal-500' : 'bg-red-800' : 'bg-white'} h-16 w-full rounded-t-xl`}>
        {
          isAdding &&
          <div className="w-full h-full flex justify-between items-center py-2 px-4">
            <h1 className="text-white text-2xl tracking-widest leading-none">
              {moment(new Date()).format(`D MMMM`).toUpperCase()}<br />
              {moment(new Date()).format(`YYYY`)}
            </h1>
            <input type="checkbox" className="w-6 h-6 cursor-pointer" onChange={handleCompletedChange} />
          </div>
        }
      </div>
      <div className="bg-white h-64 rounded-b-xl overflow-hidden">
        {
          isAdding ?
            <div className="relative w-full h-full flex justify-between items-start pt-2 pb-16 px-4">
              <textarea type="textarea" className="text-black text-lg tracking-widest leading-snug w-full h-full bg-gray-400 p-2 resize-none rounded-lg"
                onChange={handleDescriptionChange}>
              </textarea>
              <div className="absolute bottom-0 right-0 left-0 mb-2 cursor-pointer flex items-center justify-around py-2">
                <button className="px-4 rounded-md text-white bg-teal-500 text-2xl tracking-widest focus:outline-none hover:font-bold" onClick={handleAddTask}>ADD</button>
                <button className="px-4 rounded-md text-gray-800 text-2xl tracking-widest focus:outline-none hover:font-bold" onClick={toggleAddFormVisibility}>CANCEL</button>
              </div>
            </div> :
            <div className="relative w-full h-full flex justify-center items-center">
              <FontAwesomeIcon icon={faPlusCircle} className="mb-16 text-teal-500 text-6xl cursor-pointer" onClick={toggleAddFormVisibility} />
            </div>
        }
      </div>

      <Loading isLoading={isLoading} />
    </div>
  )
}

export default AddTask