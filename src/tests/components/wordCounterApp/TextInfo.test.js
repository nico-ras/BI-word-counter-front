import { fireEvent, render, screen } from "@testing-library/react"
import { TextInfo } from "../../../components/wordCounterApp/TextInfo"

describe('Pruebas en <TextInfo />', () => { 

    const dummyInfo = {
        title: 'Titulo de prueba',
        id: 1,
        text: 'Texto de prueba',
         }

    beforeEach( () => {

        render(<TextInfo title={dummyInfo.title} id={dummyInfo.id} text={dummyInfo.text} />)

    } )     

    test('Debe coincidir con la captura', () => { 

        expect( screen ).toMatchSnapshot();

     })

    test('Debe mostrar la informacion del texto', () => { 

        expect( screen.getByText(dummyInfo.title).innerHTML ).toBe(dummyInfo.title);
        expect( screen.getByText(dummyInfo.id).innerHTML ).toBe('1');

     }) 

    test('Debe el boton mostrar texto completo y cambiar de nombre a "Ocultar texto"', () => { 

        const button = screen.getByRole('button')
        fireEvent.click(button);
        

        expect( screen.getByText('Texto de prueba')).toBeDefined()
        expect(button.innerHTML).toBe('Ocultar texto');
        
     }) 

    test('Debe, al presionar el boton, poder mostrar texto y al presionar nuevamente, ocultar el texto completo', () => { 

        

        const button = screen.getByRole('button')
        
        fireEvent.click(button);
        const textElem = screen.getByText('Texto de prueba')
        fireEvent.click(button);

        expect(textElem ).not.toBeInTheDocument()
        expect(button.innerHTML).toBe('Ver texto completo');
        
     }) 
    
 })