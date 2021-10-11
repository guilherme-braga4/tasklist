import React from 'react'
import "./task.css"

const Task = ({task, handleTaskClick}) => {
  return (
    <div
        className="task-container"
        style={task.completed ? { borderLeft: "8px solid blue" } : {}} >

        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
            {task.title}
        </div>
    </div>
  )
}
 
export default Task;