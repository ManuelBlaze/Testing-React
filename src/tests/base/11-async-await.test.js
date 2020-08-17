import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Tests in 11-async-await', () => {
    
    test('should return url img', async() => {

        const url = await getImagen();

        expect( url.includes('https://') ).toBe( true );
    });
    
});