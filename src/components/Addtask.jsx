import React from 'react'
import "./Addtask.css"

/*usamos JSX, então o <input> é literalmente um HTML*/
const AddTask = () => {
  return ( 
  <div className="add-task-container">
    <input className="add-task-input" type="text">

    </input>
  </div>
   );
}
 
export default AddTask;