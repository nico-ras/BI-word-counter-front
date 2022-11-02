import React from 'react';
import ('../../styles/schedulator/task.css');

export const Tasks = ({ task: { duration, task_id, task_name } }) => {
  return (
    <div className='task'>
        <h5>Nombre de la tarea: { task_name }</h5>
        <h5>Duracion: { duration } hrs</h5>
    </div>
  )
}
