import { render, screen } from "@testing-library/react"
import { RankingResults } from "../../../components/wordCounterApp/RankingResults"

describe('Pruebas en el componente <RankingResults />', () => { 

    

   beforeEach( () => {
       
   })

    test('Debe coincidir con la captura', () => { 

        const result =  {
            id: 1, 
            title: 'Titulo de prueba', 
            ranking: [
               { 
                   word: 'Palabra de prueba', 
                   position: 1, 
                   occurrences: 3 
               }
           ], 
            text: 'Texto de prueba' } ;

        render(<RankingResults result={result} />);    

        expect( screen ).toMatchSnapshot();


     })

     test('Debe entregar al componente hijo el resultado', () => { 

        const result =  {
            id: 1, 
            title: 'Titulo de prueba', 
            ranking: [
               { 
                   word: 'Palabra de prueba', 
                   position: 1, 
                   occurrences: 3 
               }
           ], 
            text: 'Texto de prueba' } ;

        render(<RankingResults result={result} />); 

        // TODO ---->>  expect( screen )

      })

    test('Debe mostrar mensaje de aviso en caso de no encontrar el ID del texto', () => { 

        const result =  {} ;

        render(<RankingResults result={result} />);
        
        expect( screen.getByTestId('notFoundMessage').innerHTML).toBe('Lo sentimos, el numero no coincide con ningún ID !!');

     }) 

 })