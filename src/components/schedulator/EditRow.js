import React from 'react'
import { useForm } from '../../hooks/useForm'

export const EditRow = ({ id, initTask, initHours, onEdit, edit }) => {

    const {task, hours, onInputChange } = useForm({id, initTask, initHours});

    const confirmEdit = () => {
        onEdit({id, task, hours});
        edit();
    }

  return (
    <>
      <td>{id}</td>
      <td><input name='task' placeholder={initTask} value={task} onChange={ onInputChange } /></td>
      <td><input name='hours' placeholder={initHours} value={hours} onChange={ onInputChange } /></td>
      <td><button onClick={ () =>  confirmEdit() } className='editBtn'>Hecho!</button></td>
      <td>-</td>
    </>
  )
}
