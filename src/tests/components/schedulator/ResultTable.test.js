import { render, screen } from "@testing-library/react";
import { ResultTable } from "../../../components/schedulator/ResultTable";
import { scheduleFixture } from "../../fixtures/scheduleFixtures";

describe("Pruebas en el compomente <ResultTable />", () => {
  const schedule = scheduleFixture;

  test("Debe coincidir con la captura", () => {
    render(<ResultTable schedule={schedule} />);

    expect(screen).toMatchSnapshot;
  });

  test("Debe mostrar la informacion general de la calendarizacion de tareas", () => {
    render(<ResultTable schedule={schedule} />);

    const title = screen.getByRole("heading", { level: 3 });
    const daysSubtitle = screen.getAllByRole("heading", { level: 4 })[0];
    const horasJornadaSubtitle = screen.getAllByRole("heading", {
      level: 4,
    })[1];

    expect(title.innerHTML).toBe("Organizacion de tareas");
    expect(daysSubtitle.innerHTML).toBe(
      `Dias totales para completar las tareas: ${schedule.dias_termino}`
    );
    expect(horasJornadaSubtitle.innerHTML).toBe(
      `Horas de cada jornada de trabajo: ${schedule.hrs_jornada} hrs`
    );
  });
});
