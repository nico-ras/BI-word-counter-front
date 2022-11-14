import React from "react";
import { useForm } from "../../hooks/useForm";
import '../../styles/schedulator/schedulatorForm.css';


export const SchedulatorForm = ({ handleNewTask }) => {


  const { task_name, duration, onInputChange, onResetForm } = useForm({
    task_name: '',
    duration: '',
  });



  const onFormSubmit = (e) => {
        e.preventDefault();
        if (task_name.length <= 1 ) return;
        const newTask = {
          task_id: new Date().getTime(),
          task_name,
          duration,
        }

        handleNewTask(newTask);
        onResetForm();
  }


  return (
    <form data-testid="regTaskForm" onSubmit={ (e) => onFormSubmit(e) }>
      <div className="taskDiv">
        <label htmlFor="task_name">Tarea por realizar: </label>
        <input name="task_name" type="text" placeholder="Organizar mi..." value={task_name} onChange={ onInputChange } />
      </div>
      <div className="hoursDiv">
        <label htmlFor="duration">Duracion de la tarea: </label>
        <input name="duration" type="number" placeholder="numero de horas" value={duration} onChange={ onInputChange }/>
      </div>
      <button className="regBtn">Registrar</button>
    </form>
  );
};
