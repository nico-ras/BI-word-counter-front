import { render, screen } from "@testing-library/react"
import { RankingResults } from "../../../components/wordCounterApp/RankingResults"

describe('Pruebas en el componente <RankingResults />', () => { 

    

   beforeEach( () => {
    let result =  {
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
   })

    test('Debe coincidir con la captura', () => { 

         

        expect( screen ).toMatchSnapshot();


     })

     test('Debe entregar al componente hijo el resultado en una fila', () => { 

        expect( screen.getByRole("row", { name: "1 'Palabra de prueba' 3" }) ).toBeDefined();

      })

    test('Debe mostrar mensaje de aviso en caso de no encontrar el ID del texto', () => { 

        let result =  {} ;

        render(<RankingResults result={result} />);
        
        expect( screen.getByTestId('notFoundMessage').innerHTML).toBe('Lo sentimos, el numero no coincide con ningún ID !!');

     }) 

 })