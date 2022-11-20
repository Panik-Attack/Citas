import { List } from 'antd'
import Item from 'antd/lib/list/Item'
import React from 'react'
import moment from 'moment';

export const CitasInfo = ({cita}) => {
  return (
    <div>
        <List>
          
          <Item>
            <p><b>Nombre de la Cita</b>: {cita.nombreCita}</p>
          </Item>

          <Item>
            <p><b>Descripcion</b>: {cita.descripcionCita} </p>
          </Item>

          <Item>
            <p><b>Nombre del Producto</b>: {cita.nombreProducto} </p>
          </Item>
          
          <Item>
            <p><b>Precio del Producto</b>: ${cita.precioProducto} </p>
          </Item>
          
          <Item>
            {(typeof cita.disponible === 'number')
              ?
                <p><b>Disponible</b>: {cita.disponible} </p>
              :
                <p><b>Disponible</b>: { moment(cita.disponible).format('DD-MM-YYYY') } </p>
            }

          
          
          </Item>
          
          <Item>
            {(cita.confirm)
            ?
           <p> <b>Requiere Confirmacion?</b>: Si</p>
            :
            <p><b>Requiere Confirmacion?</b>: No</p>}
          </Item>
          
          <Item>
          {(cita.cancel)
            ?
           <p> <b>Puede cancelar?</b>: Si</p>
            :
            <p><b>Puede cancelar?</b>: No</p>}
          </Item>



        </List>
    </div>
  )
}
