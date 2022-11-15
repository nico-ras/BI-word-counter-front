import { fireEvent, render, screen } from "@testing-library/react";
import { TaskRows } from "../../../components/schedulator/TaskRows";

describe("Pruebas en <TaskRows />", () => {
  test("Debe coincidir con la captura", () => {
    const taskItem = {
      task_id: 1,
      task_name: "Tarea de prueba",
      duration: 2,
    };

    const onEdit = jest.fn();
    const onDelete = jest.fn();

    render(
      <table>
        <tbody>
          <TaskRows 
          taskItem={taskItem}
          onEdit={onEdit}
          onDelete={onDelete}
           />
        </tbody>
      </table>
    );

    expect(screen).toMatchSnapshot();
  });

  test("Debe mostrar por defecto el componente <ShowRow /> (no editable)", () => {
    const taskItem = {
      task_id: 1,
      task_name: "Tarea de prueba",
      duration: 2,
    };

    render(
        <table>
          <tbody>
            <TaskRows taskItem={taskItem} />
          </tbody>
        </table>
      );

    const editBtn = screen.getByRole("button", { name: "Editar" });
    expect( editBtn ).toBeInTheDocument();
  });

  test('Debe cambiar el estado de la fila al presionar el boton "Editar" y hacer la fila editable', () => { 

    const taskItem = {
        task_id: 1,
        task_name: "Tarea de prueba",
        duration: 2,
      };
  
      render(
          <table>
            <tbody>
              <TaskRows taskItem={taskItem} />
            </tbody>
          </table>
        );

        const editBtn = screen.getByRole("button", { name: "Editar" });

        fireEvent.click(editBtn);

        const sendEdit = screen.getByRole("button", { name: "Hecho!" });

        expect( sendEdit ).toBeInTheDocument();

        

   })

   test('Debe, al presionar el boton "borrar", llamar a la funcion onDelete()', () => { 

    const taskItem = {
        task_id: 1,
        task_name: "Tarea de prueba",
        duration: 2,
      };

      const onEdit = jest.fn();
      const onDelete = jest.fn();
  
      render(
          <table>
            <tbody>
              <TaskRows 
              taskItem={taskItem}
              onDelete={onDelete} />
            </tbody>
          </table>
        );

        const deleteBtn = screen.getByRole("button", {name: "Borrar"});

        fireEvent.click(deleteBtn);

        expect( onDelete ).toBeCalled();

    })


});
