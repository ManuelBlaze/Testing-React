import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';


describe('Tests in 07-deses-arr', () => {
    test('should return string and number', () => {
        
        const [ word, number ] = retornaArreglo();

        expect( typeof word ).toBe( 'string' );
        expect( typeof number ).toBe( 'number' );
    })
    
});
