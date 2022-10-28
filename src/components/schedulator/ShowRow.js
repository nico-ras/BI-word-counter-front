import React from 'react'

export const ShowRow = ({ id, task, hours, edit, onDelete }) => {
  return (
    <>
      <td>{id}</td>
      <td>'{task}'</td>
      <td>{hours}</td>
      <td><button onClick={ () =>  edit() } className='editBtn'>Editar</button></td>
      <td><button onClick={ () => onDelete(id) } className='deleteBtn'>Borrar</button></td>
    </>
  )
}
