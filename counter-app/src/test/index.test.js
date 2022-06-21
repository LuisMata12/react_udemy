

test('Esta prueba no puede fallar',()=>{
    //1. inicializacion
    const message1 = 'Hola Mundo   ';

    //2. estimulos
    const mesagge2 = message1.trim();

    //3 observar el comportamiento esperado

    expect( message1 ).toBe( mesagge2 )

});