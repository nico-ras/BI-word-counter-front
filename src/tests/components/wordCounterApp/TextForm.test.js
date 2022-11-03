import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextForm } from "../../../components/wordCounterApp/TextForm";

// textId, onInputChange, getFetch

describe('Pruebas sobre componente Formulario de contador de palabras', () => {

    const testData = { id: 1 };


    test('Prueba de envio de formulario', () => { 

        const textId = 0;
        const getFetch = jest.fn();
        const onInputChange = jest.fn();
        
        render(
        <TextForm 
        textId={textId} 
        onInputChange={onInputChange} 
        getFetch={getFetch} 
        />);

        const inputId = screen.getByTestId('inputId');
        const button = screen.getByRole('button', {
            name: /ver ranking/i
        });

        //introducimos dato en el campo id
        userEvent.clear(inputId);
        fireEvent.change(inputId, {target: {value: 1}})
        
        userEvent.click(button);

        const returnDataFetch = getFetch.mock.calls[0][0];
        const returnDataOnChange = onInputChange.mock.calls[0][0];


        expect(getFetch).toBeCalled();
        expect(onInputChange).toBeCalled();


     })
})