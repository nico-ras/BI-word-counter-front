import { render, screen } from "@testing-library/react";
import { TableComponent } from "../../../components/schedulator/TableComponent";
import { scheduleFixture } from "../../fixtures/scheduleFixtures";

describe("Pruebas en el componente <TableComponent />", () => {
  const { tareas } = scheduleFixture.jornadas[0];

  const tasks = tareas;

  const onEdit = jest.fn();
  const onDelete = jest.fn();

  test("Debe coincidir con la captura", () => {
    render(
      <TableComponent tasks={tasks} onEdit={onEdit} onDelete={onDelete} />
    );

    expect(screen).toMatchSnapshot();
  });

  test("Sí no hay tareas, no debe renderizar el componente hijo (fila de tareas)", () => {
    render(<TableComponent onEdit={onEdit} onDelete={onDelete} />);

    const tBody = screen.getByTestId("taskBodyTable");

    expect(tBody).toBeEmptyDOMElement();
  });
});
