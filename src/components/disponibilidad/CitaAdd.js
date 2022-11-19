import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import { BasicInfo } from '../citas/BasicInfo';
import './citaAdd.scss';

export const CitaAdd = ({handleAddCita}) => {
    
    // modal Controller
    const [modal, setModal] = useState(false)

    const openModal=(e)=>{
        e.preventDefault()
        setModal(true)
    }

    const closeModal=()=>{
        setModal(false)
    }


  return (
    <div className='container'>

    <h4>Agregar Cita</h4>
        <hr/>

    <Modal 
        title='Agregar Cita'
        open={modal}
        onCancel={closeModal}
        footer={null}
    >
            <BasicInfo closeModal={closeModal} handleAddCita={handleAddCita} />
    </Modal>


    <Button
    type='primary'
    onClick={openModal}
    >
        Agregar Cita
    </Button>

        
    </div>    
    )
}
