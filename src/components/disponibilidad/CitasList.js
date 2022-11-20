import React from 'react'
import { CitaListItem } from './CitaListItem'
import './citasList.scss'
export const CitasList = ({citas, handleDelete, handleToggle}) => {

    return (
            <ul className='listContainer'>
            {
            citas.map( (cita, i) => (
                //TodoListItem
                <CitaListItem
                    key={cita.id}
                    cita={cita}
                    index={i}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}/>
            ))}
            </ul>
  )
}
