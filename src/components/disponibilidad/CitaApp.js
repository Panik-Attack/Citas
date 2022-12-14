import React, {useReducer  } from 'react'
import {todoReducer as citaReducer} from './CitaReducer'
import {CitasList} from './CitasList'
import { CitaAdd } from './CitaAdd'

import './citasApp.scss'




export const CitaApp = () => {  

    const [citas, dispatch] = useReducer(citaReducer, [], )

    const handleDelete = (citaId) =>{

            const action= {
                type: 'delete',
                payload: citaId
            }

            dispatch(action)
    }
    
    const handleToggle = (citaId) =>{

        dispatch({
            type: 'toggle',
            payload: citaId
        })

    }

    const handleAddCita = (newCita) =>{
        
        dispatch({
            type: 'add',
            payload: newCita
        })
    }


  return (
    <div className='container_app' >
        <h1>Citas: ({citas.length})</h1>
        <hr/>

        <div >
            
            <div>
                
                <CitasList 
                    citas={citas}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}/>


            </div>

            <div>
                
                <CitaAdd 
                    handleAddCita={handleAddCita}/>
               

            </div>
            



        </div>

    </div>
  )
}
