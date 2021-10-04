import React from 'react'

import Task from './task'

/*toda array function precisa de um return para renderizar os components */
const Tasks = ({tasks}) => {
  return (
    <div className="Tasks">
      {tasks.map(task => (
        <Task task={task} />
      ))}
    </div>
  )
}

export default Tasks
