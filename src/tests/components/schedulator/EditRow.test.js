import { fireEvent, render, screen } from "@testing-library/react";
import { EditRow } from "../../../components/schedulator/EditRow";
import { useForm } from "../../../hooks/useForm";

jest.mock("../../../hooks/useForm");

describe("Pruebas en el componente <EditRow />", () => {
  const onSetFormState = jest.fn();
  const onInputChange = jest.fn();
  const edit = jest.fn();
  const onEdit = jest.fn();
  const task_name = "Nombre de prueba";
  const duration = 4;

  beforeEach( () => {

    useForm.mockReturnValue({
      task_name,
      duration,
      onInputChange,
      onSetFormState,
    });

    render(
      <table>
        <tbody>
          <tr>
            <EditRow
              task_id={1}
              duration={duration}
              initTask={task_name}
              onEdit={onEdit}
              edit={edit}
            />
          </tr>
        </tbody>
      </table>
    );

  })

  test("Debe coincidir con la captura", () => {
    

    expect(screen).toMatchSnapshot();
  });

  test("Debe llamar a onInputChange 2 veces al modificar inputs de nombre y duracion", () => {
    

    const nameInput = screen.getAllByRole("textbox")[0];
    const durationInput = screen.getAllByRole("textbox")[1];

    fireEvent.input(nameInput, { target: { value: "totoro" } });
    fireEvent.input(durationInput, { target: { value: "6" } });

    expect(onInputChange).toHaveBeenCalledTimes(2);
  });

  test('Debe llamar a la funcion edit() y onEdit() al pulsar el boton "Hecho!"', () => { 


    const button = screen.getByRole('button', { name: 'Hecho!' });
    
    fireEvent.click(button);

    expect( edit ).toBeCalled();
    expect( onEdit ).toBeCalled()

   })

});
