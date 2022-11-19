import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Button, Modal } from 'antd';
import { BasicInfo } from '../citas/BasicInfo/BasicInfo';
import './citaAdd.scss';

export const CitaAdd = ({handleAddCita}) => {
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if( description.trim().length <= 1){
            return
        }

        const newCita = {
            id: new Date().getTime(),   
            desc: description,
            done: false
        }

        handleAddCita(newCita)
        reset()
    }
    // modal Controller
    const [modal, setModal] = useState(false)

    const openModal=(e)=>{
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
        footer={[
            <Button onClick={closeModal}>Cancelar</Button>,
            <Button type='primary'>Agregar</Button>
        ]}
        // onOk={PENDIENTE}
    >
            <BasicInfo />
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
