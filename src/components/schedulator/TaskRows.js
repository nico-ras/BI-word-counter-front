import React from 'react';
import '../../styles/schedulator/taskRow.css';

export const TaskRows = ({task: { hours, id, task }, onEdit, onDelete}) => {
  return (
    <>
           <tr>
           <td>{id}</td>
           <td>'{task}'</td>
           <td>{hours}</td>
           <td><button onClick={ () => onEdit() } className='editBtn'>Editar</button></td>
           <td><button onClick={ () => onDelete() } className='deleteBtn'>Borrar</button></td>
          </tr> 
    </>
  )
}
