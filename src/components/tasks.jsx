import React from 'react'

import Task from './task'

/*toda array function precisa de um return para renderizar os components */
const Tasks = ({tasks, handleTaskClick, handleTaskDelete}) => {
  return (
    <div>
      {tasks.map ((task) => (
        <Task task={task} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
      ))}
    </div>
  )
}

export default Tasks
