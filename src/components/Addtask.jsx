import React, {useState} from 'react'
import "./Addtask.css"
import Button from "./Button"


/*usamos JSX, então o <input> é literalmente um HTML*/
/* const XXX = (function ou const{props}) => {} */
const AddTask = ({handleTaskAddition, handleTaskDelete}) => {
  const [inputData, setInputData] = useState (""); /*o useState captura o que o usuário digitar, por isso ""*/

  const handleInputChanges = (e) => {
      setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
      handleTaskAddition(inputData);
      setInputData("");
  };



  return ( 
  <div className="add-task-container">
    <input 
      onChange={handleInputChanges}
      value={inputData}
      className="add-task-input" 
      type="text"/>
    <div className="add-button-container">
      <Button onClick={handleAddTaskClick}>
        ADICIONAR
      </Button>
      
    </div>
  </div>
   );
};
 
export default AddTask;