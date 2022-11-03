const { render, screen } = require("@testing-library/react");
import { Text } from '../../../components/wordCounterApp/Text' 

describe('Pruebas en componente <Text />', () => { 

    const text = 'ES UN TEST';

    

    test('Debe ser como la captura', () => { 
        const { container } = render(<Text text={text} />);
        expect( container ).toMatchSnapshot();
     })


     test('Debe mostrar el texto literal "ES UN TEST"', () => { 
       
        render( <Text text={text} /> );
        // screen.debug()
        expect( screen.getByText(text) ).toBeTruthy;

        expect(screen.getByTestId('test-text').innerHTML).toBe(text)

      })

      
 })