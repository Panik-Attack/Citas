import React from 'react'

export const CitaListItem = ( {cita, handleDelete, handleToggle, index}) => {
  return (
    <li
        key={cita.id}
    >   
        <p 
            className={`${cita.done && 'complete'}`}
            onClick={() => handleToggle(cita.id)}
        >
            {index + 1}.{cita.nombreCita}
        </p>


        <button 
            onClick={() => handleDelete(cita.id)}
        >
            Borrar
        </button>
    </li>
  )
}
