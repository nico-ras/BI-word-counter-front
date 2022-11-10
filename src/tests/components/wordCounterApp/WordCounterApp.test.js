import { render, screen } from "@testing-library/react"
import { WordCounterApp } from "../../../components/wordCounterApp/WordCounterApp"
import { useFetch } from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch");

const getFetch = jest.fn()

beforeEach( () => {
    const data = {
        id: 1,
        title: "Titulo de prueba",
        ranking: [
          {
            word: "Palabra de prueba",
            position: 1,
            occurrences: 3,
          },
        ],
        text: "Texto de prueba",
      };

      useFetch.mockReturnValue({
        data,
        getFetch,
      });

      render( <WordCounterApp /> )
} )

describe('Pruebas sobre el componente <WordCounterApp />', () => { 

    test('Debe coincidir con la captura', () => { 

        expect( screen ).toMatchSnapshot();
        
     })


    test("Debe entregar ranking de palabras a traves de useFetch hook", () => {
      
        expect( screen.getByRole('row', { name: "1 'Palabra de prueba' 3" }) ).toBeDefined();

    }); 

    test('Debe renderizar al componente hijo del formulario (<TextForm />)', () => { 

        expect( screen.getByRole("spinbutton") ).toBeDefined();

     })

 })