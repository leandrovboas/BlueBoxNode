const test = require('tape')
const index = require('../src/exampleTest')

test('Aplicar desconto', (t) => {
    t.assert(index.aplicarDesconto(10,5) === 5, "Descontou corretamente")
    t.end()  
});