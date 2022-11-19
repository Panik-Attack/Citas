import React from 'react'

export const CitaListItem = ( {todo: cita, handleDelete, handleToggle, index}) => {
  return (
    <li
        key={cita.id}
    >   
        <p 
            className={`${cita.done && 'complete'}`}
            onClick={() => handleToggle(cita.id)}
        >{index + 1}.{cita.desc}</p>
        <button 
            onClick={() => handleDelete(cita.id)}
        >
            Borrar
        </button>
    </li>
  )
}
