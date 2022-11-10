import { render, screen } from "@testing-library/react"
import { WordTable } from "../../../components/wordCounterApp/WordTable"


describe('Pruebas en <WordTable />', () => { 

    const testWord = {
        word: 'Palabra de prueba',
        position: '1',
        occurrences: '2', 
    }

    test('Debe hacer match con el snapshot', () => { 

        

        render( <table><tbody><WordTable  element={testWord} /></tbody></table>);

        expect( screen ).toMatchSnapshot();


     })

     test('Debe mostrar la informacion del elemento', () => { 

        render( <table><tbody><WordTable  element={testWord} /></tbody></table>);

        
        expect( screen.getByRole("cell", { name: "'Palabra de prueba'"}).innerHTML ).toContain(testWord.word);
        expect( screen.getByRole("cell", { name: 1}).innerHTML ).toContain(testWord.position);
        expect( screen.getByRole("cell", { name: 2}).innerHTML ).toContain(testWord.occurrences);   

      })

 })