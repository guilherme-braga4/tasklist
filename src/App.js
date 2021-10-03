import React, { useState } from 'react'
import './App.css'

/*Array Function - processe os componentes em qualquer ordem*/
const App = () => {
  const [message, setMessage] = useState('Messagem Padrão') /*valor iniciar*/

  const Tasks = 'Seja bem vindo'

  /*<div> pai, recebe componentes filhos, pois precisamos renderizar todos os componentes filhos em 1 único componente pai*/
  return (
    <div className="container">
      <h1>{message}</h1>
      <button onClick={() => setMessage('Mensagem Atualizada')}>
        ATUALIZAR
      </button>
    </div>
  )
}

export default App
