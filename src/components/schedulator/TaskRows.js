import React, { useState } from 'react';
import '../../styles/schedulator/taskRow.css';
import { EditRow } from './EditRow';
import { ShowRow } from './ShowRow';

export const TaskRows = ({ taskItem ,taskItem: { duration, task_id, task_name }, onEdit, onDelete}) => {

    const [row, setRow] = useState({editable: false})

    const edit = () => {
        setRow({
            editable: !row.editable,
        })
    }
    
  return (
    <>
        <tr>
        { row.editable ? 
        <EditRow task_id={ task_id } initHours={ duration } initTask={ task_name } onEdit={ onEdit } edit={ edit } /> : 
        <ShowRow task_id={ task_id } duration={ duration } task_name={ task_name } edit={ edit } onDelete={ onDelete }/> }
        </tr> 
    </>
  )
}
