import React, { useEffect, useReducer } from 'react'
import { citaReducer } from '../CitasReducer/CitaReducer'
import { CitasAdd } from '../CitasAdd/CitasAdd'
import { CitasList } from '../CitasList/CitasList'

import './citasApp.scss'


const init = () => {
    return JSON.parse(localStorage.getItem('citas')) || []
}

export const CitasApp = () => {

    const [citas, dispatch] = useReducer(citaReducer, [], init)

    useEffect(() => {
        localStorage.setItem('citas', JSON.stringify(citas))
    }, [citas])

    const handleDelete = (citaId) => {

        const action = {
            type: 'delete',
            payload: citaId
        }

        dispatch(action)
    }

    const handleToggle = (citaId) => {

        dispatch({
            type: 'toggle',
            payload: citaId
        })

    }

    const handleAddCita = (newCita) => {

        dispatch({
            type: 'add',
            payload: newCita
        })
    }


    return (
        <div className='container_app' >
            <h1 >Citas: {citas.length}</h1>
            <hr />
            <br />
            <div>
                {
                    (citas.length === 0
                        ?
                        <h2 className='msgNoDis'>No hay citas disponibles :(</h2>
                        :

                        <div>

                            <CitasList
                                citas={citas}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle} />
                        </div>

                    )}

                <div>
                    <CitasAdd
                        handleAddCita={handleAddCita} />
                </div>

            </div>

        </div>
    )
}
