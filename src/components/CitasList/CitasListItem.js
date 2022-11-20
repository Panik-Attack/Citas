import { Button } from 'antd'
import React from 'react'

export const CitasListItem = ({ cita, handleDelete, handleToggle, index }) => {
    return (
        <li
            key={cita.id}
            onClick={handleToggle}
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
                <br />
                Precio: ${cita.precioProducto}
            </p>

        </li>
    )
}
