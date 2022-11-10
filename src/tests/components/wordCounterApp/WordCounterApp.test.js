import { render, screen } from "@testing-library/react"
import { WordCounterApp } from "../../../components/wordCounterApp/WordCounterApp"

describe('Pruebas sobre el componente <WordCounterApp />', () => { 

    test('Debe coincidir con la captura', () => { 

        render( <WordCounterApp /> )

        expect( screen ).toMatchSnapshot();

     })

 })