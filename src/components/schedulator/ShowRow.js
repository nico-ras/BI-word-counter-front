import React from 'react'

export const ShowRow = ({ task_id, task_name, duration, edit, onDelete }) => {
  return (
    <>
      <td>{task_id}</td>
      <td>'{task_name}'</td>
      <td>{duration}</td>
      <td><button onClick={ () =>  edit() } className='editBtn'>Editar</button></td>
      <td><button onClick={ () => onDelete(task_id) } className='deleteBtn'>Borrar</button></td>
    </>
  )
}
