import React, { useState } from 'react'
import Tasks from './components/tasks'
import AddTask from './components/Addtask'
import { v4 as uuidv4 } from "uuid"
import './App.css'
import Task from './components/task'

/*Array Function - processe os componentes em qualquer ordem*/
const App = () => {
  const [tasks, setTasks] = useState([
    /* const [estado, atualização do estado] = useState(valor inicial)*/
    {
      id: '1',
      title: 'Ir para a Academia',
      completed: true
    },
    {
      id: '2',
      title: 'Leitura',
      completed: false
    },
    {
      id: '3',
      title: 'Estudar Programação',
      completed: true
    },
  ])

  /*vamos manipular uma função handleTaskClick para conseguirmos trabalhar a propriedade "completed" da nossa Task*/
  /*O método map() invoca a função callback passada por argumento para cada elemento do array e devolve um novo array como resultado*/
    const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) 
        return { ...task, completed: !task.completed}
  /* taskId = valor recebido e task.id é o valor padrão*/
  /* !task.completed significa o inverso do estado atual do "completed" */
        return task;
      })
    
    setTasks(newTasks)
};
  /* uma vez que existe a função Task, é necessário criar um componente para poder renderizar no return ()*/

  /* NOTE que: const Tasks é DIFERENTE do componente Tasks*/

  /*<div> pai, recebe componentes filhos, pois precisamos renderizar todos os componentes filhos em 1 único componente pai*/

  /* é no return () onde renderizamos todas as funções para o JS*/

const handleTaskAddition = (taskTitle) => {
  const newTask = [
    ...tasks,
    {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },
  ]

  setTasks(newTask);
};

  return (
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
    </div>
  )
}
/* passamos uma função para um componente através de <Componente Const={Const}/> e depois podemos usá-lo como PROPS*/
export default App;
