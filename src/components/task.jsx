import React from 'react'
import {TiDelete} from 'react-icons/ti'
import "./task.css"

const Task = ({task, handleTaskClick, handleTaskDelete}) => {
  return (
    <div
        className="task-container"
        style={task.completed ? { borderLeft: "8px solid blue" } : {}} >

        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
            {task.title}
        </div>

        <div className="buttons-container">
          <button className="remove-task-button" onClick={() => handleTaskDelete(task.id)}>
            <TiDelete size={30}/>
          </button>
        </div>
    </div>
  )
}
 
export default Task;