import React, { useContext, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import moment from 'moment'
import Context from '../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import Loading from './Loading'

const Task = ({ task }) => {
  const { dispatch, api } = useContext(Context)
  const alert = useAlert()

  const [description, setDescription] = useState(task.description)
  const [completed, setCompleted] = useState(task.completed)

  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleCompletedChange = (e) => {
    setCompleted(!completed)
  }

  const handleCancelUpdate = () => {
    setDescription(task.description)
    setCompleted(task.completed)
    setIsEditing(!isEditing)
  }

  useEffect(() => {
    setDescription(description)
    setCompleted(completed)
  }, [completed, description])

  const handleUpdateTask = async () => {
    setIsLoading(true)

    if (description.trim()) {
      try {
        const res = await api.UPDATE_TASK({ _id: task._id, description, completed })
        dispatch({
          type: 'UPDATE_TASK',
          task: res
        })
        alert.success('Task updated!')
      } catch (error) {
        alert.show('Something went wrong!')
      }
    } else {
      setDescription(task.description)
      alert.show('Description can\'t be empty!')
    }

    setIsLoading(false)
    setIsEditing(!isEditing)
  }

  const handleRemoveTask = async () => {
    if (window.confirm("Do you really want to delete this task?")) {
      setIsLoading(true)

      try {
        const res = await api.REMOVE_TASK(task._id)
        dispatch({ type: 'REMOVE_TASK', task: res })
        alert.success('Task removed successfully!')
      } catch (error) {
        alert.show('Something went wrong!')
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="transition-shadow duration-200 hover:shadow-xl">
      <div className={`${completed ? 'bg-teal-500' : 'bg-red-800'} h-16 w-full rounded-t-xl`}>
        <div className="w-full h-full flex justify-between items-center py-2 px-4">

          <h1 className="text-white text-2xl tracking-widest leading-none">
            {moment(task.createdAt).format(`D MMMM`).toUpperCase()}<br />
            {moment(task.createdAt).format(`YYYY`)}
          </h1>

          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faPencilAlt}
              className="text-white text-xl cursor-pointer transition-transform transform duration-200 hover:scale-110"
              onClick={() => setIsEditing(!isEditing)}
            />
            <FontAwesomeIcon icon={faTrash}
              className="text-white text-xl cursor-pointer transition-transform transform duration-200 hover:scale-110"
              onClick={handleRemoveTask}
            />
            <input type="checkbox" className="w-6 h-6 cursor-pointer" checked={completed} onChange={handleCompletedChange} disabled={!isEditing} />
          </div>

        </div>
      </div>
      <div className="bg-white h-64 rounded-b-xl">
        <div className="w-full h-full flex justify-between items-start py-2 px-4">
          <div className="relative w-full h-full overflow-y-auto pb-10">
            {
              isEditing ?
                <div className="w-full h-full flex justify-between items-start pb-4">
                  <textarea
                    type="textarea"
                    className="text-black text-lg tracking-widest leading-snug w-full h-full border border-black p-2 resize-none rounded-lg focus:outline-none"
                    onChange={handleDescriptionChange} value={description} />
                  <div className="absolute bottom-0 right-0 left-0 cursor-pointer flex items-center justify-around mb-2">
                    <button
                      className="px-4 rounded-md text-white bg-teal-500 text-2xl tracking-widest focus:outline-none hover:font-bold"
                      onClick={handleUpdateTask}
                    >
                      UPDATE
                    </button>
                    <button
                      className="px-4 rounded-md text-gray-800 text-2xl tracking-widest focus:outline-none hover:font-bold"
                      onClick={handleCancelUpdate}
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
                :
                <p className="text-black text-lg tracking-widest leading-snug w-full break-words">
                  {description}
                </p>
            }
          </div>
        </div>
      </div>
      <Loading isLoading={isLoading} />
    </div>
  )
}

export default Task
