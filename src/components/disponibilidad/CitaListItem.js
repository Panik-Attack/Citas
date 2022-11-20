import { Button } from 'antd'
import React from 'react'

export const CitaListItem = ( {cita, handleDelete, handleToggle, index}) => {
  return (
    <li
        key={cita.id}
    >   
        <h2>
            {cita.nombreCita}
        </h2>
        
        
        <Button 
            onClick={() => handleDelete(cita.id)}
            shape='circle'
            type='primary'
            danger
        >
            X
        </Button>


        <p>
            {cita.descripcionCita}
        </p>



        <p>
            <br/>
            Precio: ${cita.precioProducto}
        </p>

    </li>
  )
}
