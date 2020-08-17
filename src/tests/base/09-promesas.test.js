import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Tests with promises', () => {
    
    test('getHeroeByIdAsync should return an async Hero', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();

            });
    });

    test('should generate a error message if the hero id does not exist', ( done ) => {
        
        const id = 10;
        
        getHeroeByIdAsync( id )
            .catch( error => {

                expect(error).toBe("No se pudo encontrar el héroe");
                done();
            });
    });
    
    
});