import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import { FormCita } from '../FormCita/FormCita';

import './citasAdd.scss';

export const CitasAdd = ({ handleAddCita }) => {

    // modal Controller
    const [modal, setModal] = useState(false)

    const openModal = (e) => {
        e.preventDefault()
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }


    return (
        <div className='container'>


            <hr />

            <Modal
                title='Agregar Cita'
                open={modal}
                onCancel={closeModal}
                footer={null}
            >
                <FormCita closeModal={closeModal} handleAddCita={handleAddCita} />
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
