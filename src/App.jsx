import React, { useState } from 'react'
import Tasks from './components/tasks'
import AddTask from './components/Addtask'
import './App.css'

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
  /* uma vez que existe a função Task, é necessário criar um componente para poder renderizar no return ()*/

  /* NOTE que: const Tasks é DIFERENTE do componente Tasks*/

  /*<div> pai, recebe componentes filhos, pois precisamos renderizar todos os componentes filhos em 1 único componente pai*/

  /* é no return () onde renderizamos todas as funções para o JS*/
  return (
    <div className="container">
      <AddTask/>
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
