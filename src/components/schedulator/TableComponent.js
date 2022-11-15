import React from "react";
import { TaskRows } from './TaskRows';

export const TableComponent = ({ tasks, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tarea</th>
          <th>Cantidad de horas</th>
          <th>Editar</th>
          <th>borrar</th>
        </tr>
      </thead>
      <tbody data-testid="taskBodyTable">
        {tasks && tasks.map((task) => <TaskRows taskItem={ task } onEdit={ onEdit } onDelete={ onDelete } key={task.task_id} />)}
      </tbody>
    </table>
  );
};
