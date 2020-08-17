import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Tests in 05-funciones', () => {
    test('getUSer should return an object', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        const user = getUser();

        expect( user ).toEqual( userTest );
    })

    test('getUsuarioActivo should return an object', () => {
        
        const user = 'Manuel';

        const activeUser = getUsuarioActivo(user);

        expect( activeUser ).toEqual({
            uid: 'ABC567',
            username: user
        });

    })
    
    
});
