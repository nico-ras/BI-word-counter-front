import { render, screen } from "@testing-library/react"
import { TableComponent } from "../../../components/schedulator/TableComponent";

describe('Pruebas en el componente <TableComponent />', () => { 

    test('Debe coincidir con la captura', () => { 

        const tasks = [
            {
                task_id: 1, 
                task_name: 'Tarea 1', 
                duration: 2,
            },
            {
                task_id: 2, 
                task_name: 'Tarea 2', 
                duration: 3,
            },
        ];
        const onEdit = jest.fn();
        const onDelete = jest.fn(); 

        render(<TableComponent 
            tasks={tasks} 
            onEdit={onEdit} 
            onDelete={onDelete}
             />);

        expect( screen ).toMatchSnapshot();     

     })

     test('Sí no hay tareas, no debe renderizar el componente hijo (fila de tareas)', () => { 

        const onEdit = jest.fn();
        const onDelete = jest.fn(); 

        render(<TableComponent 
            onEdit={onEdit} 
            onDelete={onDelete}
             />);

            const tBody = screen.getByTestId("taskBodyTable");

            expect( tBody ).toBeEmptyDOMElement(); 

      })


 })