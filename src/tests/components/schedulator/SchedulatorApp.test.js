import { render, screen } from "@testing-library/react"
import { SchedulatorApp } from "../../../components/schedulator/SchedulatorApp"
import { useSchedule } from "../../../hooks/useSchedule";
import { useTasks } from "../../../hooks/useTasks";
import { scheduleFixture } from "../../fixtures/scheduleFixtures";

const { tareas } = scheduleFixture.jornadas[0];

 
jest.mock("../../../hooks/useSchedule");
jest.mock("../../../hooks/useTasks");

const handleNewTaskMock = jest.fn();
const handleEditTaskMock = jest.fn();
const handleDeleteTaskMock = jest.fn();
const handleGetRandScheduleMock = jest.fn();
const handleMyScheduleMock = jest.fn();

describe('Pruebas en el componente <SchedulatorApp />', () => { 



    test('Debe coincidir con captura', () => { 

        useSchedule.mockReturnValue({
            schedule: {data: scheduleFixture}, 
            handleGetRandSchedule: handleGetRandScheduleMock, 
            handleMySchedule: handleMyScheduleMock,
        })

        useTasks.mockReturnValue({
            tasks: tareas, 
            handleNewTask: handleNewTaskMock, 
            handleEditTask: handleEditTaskMock, 
            handleDeleteTask: handleDeleteTaskMock,
        })


        render(<SchedulatorApp />);

        expect( screen ).toMatchSnapshot();
     });

    test('Debe, sí no hay tareas ni schedule, solo mostrar el formulario', () => { 

        useSchedule.mockReturnValue({
            schedule: {data: null}, 
            handleGetRandSchedule: handleGetRandScheduleMock, 
            handleMySchedule: handleMyScheduleMock,
        })

        useTasks.mockReturnValue({
            tasks: null, 
            handleNewTask: handleNewTaskMock, 
            handleEditTask: handleEditTaskMock, 
            handleDeleteTask: handleDeleteTaskMock,
        })


        render(<SchedulatorApp />) 

        expect( screen.queryByTestId("taskBodyTable") ).toBeNull();
        expect( screen.queryByTestId('workingDaySection') ).toBeNull()

     }) 

     test('Debe llamar a la funcion handleGetRandSchedule al presionar el boton "Crear al azar"', () => { 

        

      })

 })