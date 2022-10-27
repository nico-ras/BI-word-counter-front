import React from "react";
import { useForm } from "../../hooks/useForm";
import '../../styles/schedulator/schedulatorForm.css';


export const SchedulatorForm = ({ handleNewTask }) => {


  const { task, hours, onInputChange, onResetForm } = useForm({
    task: '',
    hours: '',
  });



  const onFormSubmit = (e) => {
        e.preventDefault();
        if (task.length <= 1 ) return;
        const newTask = {
          id: new Date().getTime(),
          task,
          hours,
        }

        handleNewTask(newTask);
        onResetForm();
  }


  return (
    <form onSubmit={ onFormSubmit }>
      <div className="taskDiv">
        <label htmlFor="task">Tarea por realizar: </label>
        <input name="task" type="text" placeholder="Organizar mi..." value={task} onChange={ onInputChange } />
      </div>
      <div className="hoursDiv">
        <label htmlFor="hours">Duracion de la tarea: </label>
        <input name="hours" type="number" placeholder="numero de horas" value={hours} onChange={ onInputChange }/>
      </div>
      <button className="regBtn">Registrar</button>
    </form>
  );
};
