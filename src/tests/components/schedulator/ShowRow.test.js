import { fireEvent, render, screen } from "@testing-library/react";
import { ShowRow } from "../../../components/schedulator/ShowRow";

describe("Pruebas en el componente <ShowRow /> de SchedulatorApp", () => {
  const edit = jest.fn();
  const onDelete = jest.fn();
  const task_name = "Nombre de prueba";

  test("Debe coincidir con la captura", () => {
    render(
      <table>
        <tbody>
          <tr>
            <ShowRow
              task_id={1}
              duration={4}
              task_name={task_name}
              edit={edit}
              onDelete={onDelete}
            />
          </tr>
        </tbody>
      </table>
    );

    expect(screen).toMatchSnapshot();
  });


test('Debe llamar a la funcion edit la presionar el boton "Editar" ', () => { 

    render(
        <table>
          <tbody>
            <tr>
              <ShowRow
                task_id={1}
                duration={4}
                task_name={task_name}
                edit={edit}
                onDelete={onDelete}
              />
            </tr>
          </tbody>
        </table>
      );
  

    const editButon = screen.getByRole('button', { name: 'Editar' });
    
    fireEvent.click(editButon);

    expect( edit ).toBeCalled()

 })

 test('Debe llamar a la funcion onDelete la presionar el boton "Borrar" ', () => { 

    render(
        <table>
          <tbody>
            <tr>
              <ShowRow
                task_id={1}
                duration={4}
                task_name={task_name}
                edit={edit}
                onDelete={onDelete}
              />
            </tr>
          </tbody>
        </table>
      );
  

    const deleteButon = screen.getByRole('button', { name: 'Borrar' });
    
    fireEvent.click(deleteButon);

    expect( onDelete ).toBeCalled()

 })

  
});
