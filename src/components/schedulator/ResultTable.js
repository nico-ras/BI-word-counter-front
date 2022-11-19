import React from 'react'
import { WorkingDay } from './WorkingDay';
import ('../../styles/schedulator/resultTable.css')

export const ResultTable = ({ schedule }) => {

const { dias_termino, hrs_jornada, jornadas } = schedule;


  return (
    <div className='resultDiv'>
        <h3>Organizacion de tareas</h3>
        <h4>Dias totales para completar las tareas: { dias_termino }</h4>
        <h4>Horas de cada jornada de trabajo: { hrs_jornada } hrs</h4>   
        <section className='cards' data-testid='workingDaySection'>
        {jornadas.map((jornada) => (
          <WorkingDay jornada={ jornada } key={ jornada.id } /> 
        ))}
        </section>  
    </div>
  )
}
