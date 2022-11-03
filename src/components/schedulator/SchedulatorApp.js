import React, { useEffect } from "react";
import { SchedulatorForm } from "./SchedulatorForm";
import "../../styles/schedulator/schedulatorApp.css";
import { useTasks } from "../../hooks/useTasks";
import { TableComponent } from "./TableComponent";
import { useSchedule } from "../../hooks/useSchedule";
import { ResultTable } from "./ResultTable";

export const SchedulatorApp = () => {
  const { tasks, handleNewTask, handleEditTask, handleDeleteTask } = useTasks();

  const { schedule, handleGetRandSchedule, handleMySchedule } = useSchedule({});

  // useEffect(() => {
  //   console.log(schedule);
  // }, [schedule])
  

  
  
  return (
    <>
      <h1 className="sTitle">Organizador de tareas diarias</h1>

      <div>
        <div className="formDiv">
          <h3>Ingresa tus proximas actvidades y tareas: </h3>
          <SchedulatorForm handleNewTask={handleNewTask} />
        </div>
        {tasks ? (
          <div className="tableDiv">
            <h3>Tareas por realizar: </h3>
            <TableComponent tasks={ tasks } onEdit={ handleEditTask }  onDelete={ handleDeleteTask } />
            <button className="calcBtn" onClick={ () => handleMySchedule(tasks) }>Calcular jornada</button>
            <p className="pDisclaimer">* en base a la jornada laboral de 8 horas</p>
          </div>
        ) : 
          <div className="formDiv">
            <h3>Quieres organizar tu calendario con tareas al azar?</h3>
            <button className="randBtn" onClick={() => handleGetRandSchedule()} >Crear al azar</button>
          </div>
        }
        { schedule.data &&
        <div>
          <ResultTable schedule={schedule.data} />
        </div> 
        }
      </div>
    </>
  );
};
