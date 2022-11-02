import React from 'react';
import { Tasks } from './Tasks';
import ('../../styles/schedulator/workingDay.css')

export const WorkingDay = ({jornada, jornada: { id, freeHours, tareas } }) => {
    
  return (
    <div className='card'>
        <h4>Dia de trabajo: { id }</h4>
        <p>Horas libres del dia: { freeHours } hrs</p>
        <hr/>
        <h4>Tareas del dia: </h4>
        {tareas.map((tarea) => (
            <Tasks task={ tarea } key={ tarea.task_id }/>
        ))}
    </div>
  )
}
