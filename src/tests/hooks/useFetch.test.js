const { renderHook, act, waitFor } = require("@testing-library/react");
const { useFetch } = require("../../hooks/useFetch");



describe('Pruebas sobre useFetch hook', () => { 
    

    test('Debe regresar el estado inicial', () => { 

        const { result } = renderHook( () => useFetch(1) );

        const { data, isLoading, hasError, getFetch } = result.current;

        expect( data ).toBe( null );
        expect( isLoading ).toBeTruthy();
        expect( hasError ).toBeFalsy();
        expect( getFetch ).toEqual(expect.any(Function));

    });


 })