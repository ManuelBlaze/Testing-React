
describe('Tests in demo.test.js', () => {
    test('should be equals', () => {
        
        //1. Initialization
        const message = 'Hello World';
    
        //2. estimulo
        const message2 = `Hello World`;
    
        //3. Obvservar el comportamiento
        expect( message ).toBe( message2 );
    
    })
    
});


