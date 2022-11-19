import { render, screen } from "@testing-library/react";
import { WorkingDay } from "../../../components/schedulator/WorkingDay";
import { scheduleFixture } from "../../fixtures/scheduleFixtures";

describe("Pruebas sobre <WorkingDay />", () => {
  const { jornadas } = scheduleFixture;

  const jornada = jornadas[0];

  test("Debe coincidir con la captura", () => {
    render(<WorkingDay jornada={jornada} />);

    expect(screen).toMatchSnapshot();
  });

  test("Debe mostrar la informacion del dia de trabajo", () => {
    render(<WorkingDay jornada={jornada} />);

    const diaDeTabajoText = screen.getByText(`Dia de trabajo: ${jornada.id}`);
    const horasLibresText = screen.getByText(
      `Horas libres del dia: ${jornada.freeHours} hrs`
    );

    expect(diaDeTabajoText.innerHTML).toBe(`Dia de trabajo: ${jornada.id}`);
    expect(horasLibresText.innerHTML).toBe(
      `Horas libres del dia: ${jornada.freeHours} hrs`
    );
  });

  test("Debe enviar las tareas al componente hijo", () => {
    render(<WorkingDay jornada={jornada} />);

    const taskNameDescription = screen.getByText(
      `Nombre de la tarea: ${jornada.tareas[0].task_name}`
    );

    expect(taskNameDescription.innerHTML).toBe(
      `Nombre de la tarea: ${jornada.tareas[0].task_name}`
    );
  });
});
