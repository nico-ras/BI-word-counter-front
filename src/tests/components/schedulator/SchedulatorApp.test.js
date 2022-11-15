import { render, screen } from "@testing-library/react"
import { SchedulatorApp } from "../../../components/schedulator/SchedulatorApp"

describe('Pruebas en el componente <SchedulatorApp />', () => { 

    test('Debe coincidir con captura', () => { 

        render(<SchedulatorApp />);

        expect( screen ).toMatchSnapshot();
     });

    test('Debe blabla', () => { 

        render(<SchedulatorApp />)

        screen.debug();

     }) 

     //TODO --->  continuar con el test!!

 })