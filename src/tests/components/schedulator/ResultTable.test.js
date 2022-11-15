import { render, screen } from "@testing-library/react"
import { ResultTable } from "../../../components/schedulator/ResultTable"

describe('Pruebas en el compomente <ResultTable />', () => { 

    const schedule = {
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
              }
        ]
    }

    test('Debe coincidir con la captura', () => { 


        render(<ResultTable schedule={schedule} />);

        expect( screen ).toMatchSnapshot;

        screen.debug();

     })

     test('Debe mostrar la informacion general de la calendarizacion de tareas', () => { 

        render(<ResultTable schedule={schedule} />);

        const title = screen.getByRole("heading", { level: 3 });
        const daysSubtitle = screen.getAllByRole("heading", { level: 4 })[0];
        const horasJornadaSubtitle = screen.getAllByRole("heading", { level: 4 })[1];

        expect( title.innerHTML ).toBe("Organizacion de tareas");
        expect( daysSubtitle.innerHTML ).toBe(`Dias totales para completar las tareas: ${ schedule.dias_termino }`);
        expect( horasJornadaSubtitle.innerHTML ).toBe(`Horas de cada jornada de trabajo: ${ schedule.hrs_jornada } hrs`);

      })

 })