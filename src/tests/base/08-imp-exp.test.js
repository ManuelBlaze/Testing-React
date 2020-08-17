import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Tests in 08-imp-exp', () => {

    test('should return a hero by id', () => {
        
        const id = 1;
        const hero = getHeroeById(id);

        const heroData = heroes.find( hero => hero.id === id );

        expect( hero ).toEqual( heroData );
    });

    test('should return undefined if hero does not exist ', () => {
        
        const id = 10;
        const hero = getHeroeById(id);

        expect( hero ).toBe( undefined );
    });
    
    test('should return only DC heroes', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        // for (let i = 0; i < heroes.length; i++) {
        //     const { owner: own } = heroes[i];
            
        //     expect( own ).toBe( owner );
        // }

        const heroData = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroData );
    });
    
    test('should return a 2 length array', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe( 2 );
    })
    
});
