export const scheduleFixture = {
  dias_termino: 2,
  hrs_jornada: 8,
  jornadas: [
    {
      id: 1,
      freeHours: 8,
      tareas: [
        {
          task_id: 1,
          task_name: "Tarea de prueba 1",
          duration: 3,
        },
        {
          task_id: 2,
          task_name: "Tarea de prueba 2",
          duration: 5,
        },
      ],
    },
    {
      id: 2,
      freeHours: 2,
      tareas: [
        {
          task_id: 3,
          task_name: "Tarea de prueba 3",
          duration: 2,
        },
        {
          task_id: 4,
          task_name: "Tarea de prueba 4",
          duration: 4,
        },
      ],
    },
  ],
};
