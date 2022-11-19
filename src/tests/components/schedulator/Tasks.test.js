import { render, screen } from "@testing-library/react";
import { Tasks } from "../../../components/schedulator/Tasks";
import { scheduleFixture } from "../../fixtures/scheduleFixtures";

describe("Pruebas sobre <Tasks />", () => {
  const { jornadas } = scheduleFixture;

  const { tareas } = jornadas[0];

  const task = tareas[0];

  test("Debe coincidir con la captura", () => {
    render(<Tasks task={task} />);

    expect(screen).toMatchSnapshot();
  });

  test("Debe mostrar el nombre de la tarea y su duracion", () => {
    render(<Tasks task={task} />);

    const taskNameDescription = screen.getByText(
      `Nombre de la tarea: ${task.task_name}`
    );
    const durationDescription = screen.getByText(
      `Duracion: ${task.duration} hrs`
    );

    expect(taskNameDescription.innerHTML).toBe(
      `Nombre de la tarea: ${task.task_name}`
    );
    expect(durationDescription.innerHTML).toBe(
      `Duracion: ${task.duration} hrs`
    );
  });
});
