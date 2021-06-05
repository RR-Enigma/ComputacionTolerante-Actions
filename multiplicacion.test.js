const suma = require('./multiplicacion');

test('10 * 10 = 100', () =>{
    expect(multiplicacion(10,10)).toBe(100);
});

test('a * 10 = NaN', () =>{
    expect(multiplicacion('a',10)).toBe(NaN);
});

