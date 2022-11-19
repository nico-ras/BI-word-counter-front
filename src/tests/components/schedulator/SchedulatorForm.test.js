import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SchedulatorForm } from "../../../components/schedulator/SchedulatorForm";
import { useForm } from "../../../hooks/useForm";

jest.mock("../../../hooks/useForm");

describe("Pruebas en <SchedulatorForm />", () => {
  const task_name = "Nombre de prueba";
  const duration = "";
  const onInputChange = jest.fn();
  const onResetForm = jest.fn();
  const handleNewTask = jest.fn();

  beforeEach(() => {
    useForm.mockReturnValue({
      task_name,
      duration,
      onInputChange,
      onResetForm,
    });

    render(<SchedulatorForm handleNewTask={handleNewTask} />);
  });

  test("Debe coincidir con la captura", () => {
    expect(screen).toMatchSnapshot();
  });

  test("Debe llamar a la funcion onInputChange al agregar nombre de tarea en el input", () => {
    const task = screen.getByRole("textbox");

    fireEvent.input(task, { target: { value: "tarea 2" } });

    expect(onInputChange).toBeCalled();
  });

  test("Debe llamar a la funcion onInputChange al agregar la duracion de la tarea en el input", () => {
    const durationInput = screen.getByRole("spinbutton");

    fireEvent.input(durationInput, { target: { value: 2 } });

    expect(onInputChange).toBeCalled();
  });

  test('Debe, al presionar el boton "Registrar", enviar el formulario invocando a la funcion "handleNewTask"', async () => {
    const task = screen.getByRole("textbox");
    const durationInput = screen.getByRole("spinbutton");
    const registerTaskForm = screen.getByTestId("regTaskForm");

    fireEvent.input(task, { target: { value: "tarea 2" } });
    fireEvent.input(durationInput, { target: { value: 2 } });
    fireEvent.submit(registerTaskForm);

    expect(handleNewTask).toBeCalled();
  });
});
