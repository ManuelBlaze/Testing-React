import '@testing-library/jest-dom'

import { getSaludo } from '../../base/02-template-string';

describe('Tests in 02-template-string', () => {

    test('getSaludo should return Hola Fernando', () => {
        
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe( `Hola ${nombre}` )
    })
    
    test('getSaludo should return Hola Manuel if it has no args', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Manuel' );
    })
    
})
