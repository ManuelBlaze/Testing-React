import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";

import PrimeraApp from "../PrimeraApp";

describe('Tests in <PrimeraApp />', () => {
    
    // test('should show "Hola Mundo"', () => {    
    //     const title = 'Hola Mundo';
    //     const { getByText } = render( <PrimeraApp saludo = 'Hola Mundo'/> );
    //     expect( getByText(title) ).toBeInTheDocument();
    // });
    
    test('should show <PrimeraApp /> correctly', () => {
        
        const mes = 'Hola Mundo'
        const wrapper = shallow( <PrimeraApp saludo = { mes } /> );
        
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should show the subtitle send it by props', () => {
        
        const mes = 'Hola Mundo';
        const sub = ' Soy un subtitulo ';

        const wrapper = shallow( 
            <PrimeraApp 
                saludo = { mes }
                subtitulo = { sub } 
            /> 
        );

        const text = wrapper.find('p').text();
        
        expect( text ).toBe( sub );
    });
    
});