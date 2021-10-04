import React from 'react'
import "./Button.css"

/*utilizamos a props children para que o componente button quando renderizado, leia também o que está dentro dele lá np App.jsx*/

/*o children irá nos permitir reutilizar o componente Button*/

const Button = ({children, onClick}) => {
  return (  
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}
 
export default Button;