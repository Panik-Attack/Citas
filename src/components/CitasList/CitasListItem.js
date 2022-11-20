import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { CitasInfo } from '../CitasInfo/CitasInfo'

import "./citasList.scss"


export const CitasListItem = ({ cita, handleDelete, handleToggle, index }) => {
   
    const [stateInfoModal, setStateInfoModal] = useState(false)
    
    const showInfo = () => {
        setStateInfoModal(true)
    }

    const hideInfo = () => {
        setStateInfoModal(false)
    }
    
    
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
                type='link'
                danger
            >
               {<b>X</b> } 
            </Button>


            <p id='info'>
                {cita.descripcionCita}
            </p>


            <p id='precio'>
                <br />
                Precio: ${cita.precioProducto}
            </p>

            <div className='infoBtn'>
                <Button
                    id='infoBtn'
                    type='primary'
                    shape='round'
                    ghost
                    onClick={showInfo}
                >
                    Info
                </Button>
            </div>

            <Modal
            title={<b>Informacion de la Cita</b>}
            open={stateInfoModal}
            footer={null}
            closable={false}
            >
                <CitasInfo cita={cita}/>
                <hr/>
                <div className='btnContainer'>
                    <Button
                    onClick={hideInfo}
                    type='primary'
                    >
                        Ok
                    </Button>
                </div>
            </Modal>



        </li>
    )
}
