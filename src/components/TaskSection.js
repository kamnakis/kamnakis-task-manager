import React, { useContext } from 'react'
import Task from './Task'
import Context from '../context/Context'
import AddTask from './AddTask';

const TaskSection = () => {
  const { tasks } = useContext(Context);

  return (
    <div className="w-full p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <AddTask />
        {
          tasks.map(task => <Task key={task._id} task={task} />)
        }
      </div>
    </div>
  )
}

export default TaskSection
