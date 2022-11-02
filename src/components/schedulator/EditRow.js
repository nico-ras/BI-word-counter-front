import React from 'react'
import { useForm } from '../../hooks/useForm'

export const EditRow = ({ task_id, initTask, initHours, onEdit, edit }) => {

    const {task_name, duration, onInputChange } = useForm({task_id, initTask, initHours});

    const confirmEdit = () => {
        onEdit({task_id, task_name, duration});
        edit();
    }

  return (
    <>
      <td>{task_id}</td>
      <td><input name='task_name' placeholder={initTask} value={task_name} onChange={ onInputChange } /></td>
      <td><input name='duration' placeholder={initHours} value={duration} onChange={ onInputChange } /></td>
      <td><button onClick={ () =>  confirmEdit() } className='editBtn'>Hecho!</button></td>
      <td>-</td>
    </>
  )
}
