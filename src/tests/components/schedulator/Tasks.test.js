import { render, screen } from "@testing-library/react";
import { Tasks } from "../../../components/schedulator/Tasks"

describe('Pruebas sobre <Tasks />', () => { 


    test('Debe coincidir con la captura', () => { 

        const task = {
            duration: 2,
            task_id: 1,
            task_name: 'Task de prueba',
        }

        render(<Tasks task={task} />);

        expect( screen ).toMatchSnapshot();

     })

    
     test('Debe mostrar el nombre de la tarea y su duracion', () => { 

        const task = {
            duration: 2,
            task_id: 1,
            task_name: 'Task de prueba',
        }

        render(<Tasks task={task} />);

        const taskNameDescription = screen.getByText(`Nombre de la tarea: ${task.task_name}`);
        const durationDescription = screen.getByText(`Duracion: ${task.duration} hrs`);


        expect( taskNameDescription.innerHTML ).toBe( `Nombre de la tarea: ${task.task_name}` );
        expect( durationDescription.innerHTML ).toBe( `Duracion: ${task.duration} hrs` );

      })

 })