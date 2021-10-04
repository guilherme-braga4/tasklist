import React from 'react'
import "./Addtask.css"
import Button from "./Button"


/*usamos JSX, então o <input> é literalmente um HTML*/
const AddTask = () => {
  return ( 
  <div className="add-task-container">
    <input className="add-task-input" type="text"/>
    <div className="add-button-container">
    <Button>
      ADICIONAR
    </Button>
    </div>
  </div>
   );
}
 
export default AddTask;