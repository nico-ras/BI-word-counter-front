import { render, screen } from "@testing-library/react";
import { WorkingDay } from "../../../components/schedulator/WorkingDay";

describe("Pruebas sobre <WorkingDay />", () => {

  test("Debe coincidir con la captura", () => {

    const jornada = {
      id: 1,
      freeHours: 2,
      tareas: [
        {
          task_id: 1,
          task_name: "Tarea de prueba 1",
          duration: 5,
        },
        {
            task_id: 2,
            task_name: "Tarea de prueba 2",
            duration: 3,
          },
      ],
    };

    render(<WorkingDay jornada={jornada} />);

    expect( screen ).toMatchSnapshot();

  });

  test('Debe mostrar la informacion del dia de trabajo', () => { 

    const jornada = {
        id: 1,
        freeHours: 2,
        tareas: [
          {
            task_id: 1,
            task_name: "Tarea de prueba 1",
            duration: 5,
          },
          {
              task_id: 2,
              task_name: "Tarea de prueba 2",
              duration: 3,
            },
        ],
      };
  
      render(<WorkingDay jornada={jornada} />);

    const diaDeTabajoText = screen.getByText(`Dia de trabajo: ${ jornada.id }`);
    const horasLibresText = screen.getByText(`Horas libres del dia: ${ jornada.freeHours } hrs`);

    expect( diaDeTabajoText.innerHTML ).toBe(`Dia de trabajo: ${ jornada.id }`);
    expect( horasLibresText.innerHTML ).toBe(`Horas libres del dia: ${ jornada.freeHours } hrs`);



   })

   test('Debe enviar las tareas al componente hijo', () => { 

    const jornada = {
        id: 1,
        freeHours: 2,
        tareas: [
          {
            task_id: 1,
            task_name: "Tarea de prueba 1",
            duration: 5,
          },
          {
              task_id: 2,
              task_name: "Tarea de prueba 2",
              duration: 3,
            },
        ],
      };
  
      render(<WorkingDay jornada={jornada} />);

      const taskNameDescription = screen.getByText(`Nombre de la tarea: ${jornada.tareas[0].task_name}`);

      expect( taskNameDescription.innerHTML ).toBe( `Nombre de la tarea: ${jornada.tareas[0].task_name}` );

    })

});
