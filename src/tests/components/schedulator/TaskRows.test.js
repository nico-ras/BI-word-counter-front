import { fireEvent, render, screen } from "@testing-library/react";
import { TaskRows } from "../../../components/schedulator/TaskRows";
import { scheduleFixture } from "../../fixtures/scheduleFixtures";

const { tareas } = scheduleFixture.jornadas[0];

const taskItem = tareas[0];

describe("Pruebas en <TaskRows />", () => {
  test("Debe coincidir con la captura", () => {
    const onEdit = jest.fn();
    const onDelete = jest.fn();

    render(
      <table>
        <tbody>
          <TaskRows taskItem={taskItem} onEdit={onEdit} onDelete={onDelete} />
        </tbody>
      </table>
    );

    expect(screen).toMatchSnapshot();
  });

  test("Debe mostrar por defecto el componente <ShowRow /> (no editable)", () => {
    render(
      <table>
        <tbody>
          <TaskRows taskItem={taskItem} />
        </tbody>
      </table>
    );

    const editBtn = screen.getByRole("button", { name: "Editar" });
    expect(editBtn).toBeInTheDocument();
  });

  test('Debe cambiar el estado de la fila al presionar el boton "Editar" y hacer la fila editable', () => {
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

    expect(sendEdit).toBeInTheDocument();
  });

  test('Debe, al presionar el boton "borrar", llamar a la funcion onDelete()', () => {
    const onEdit = jest.fn();
    const onDelete = jest.fn();

    render(
      <table>
        <tbody>
          <TaskRows taskItem={taskItem} onDelete={onDelete} />
        </tbody>
      </table>
    );

    const deleteBtn = screen.getByRole("button", { name: "Borrar" });

    fireEvent.click(deleteBtn);

    expect(onDelete).toBeCalled();
  });
});
