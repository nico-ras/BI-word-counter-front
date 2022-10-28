import React, { useState } from 'react';
import '../../styles/schedulator/taskRow.css';
import { EditRow } from './EditRow';
import { ShowRow } from './ShowRow';

export const TaskRows = ({ taskItem ,taskItem: { hours, id, task }, onEdit, onDelete}) => {

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
        <EditRow id={ id } initHours={ hours } initTask={ task } onEdit={ onEdit } edit={ edit } /> : 
        <ShowRow id={ id } hours={ hours } task={ task } edit={ edit } onDelete={ onDelete }/> }
        </tr> 
    </>
  )
}
