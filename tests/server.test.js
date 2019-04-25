const test = require('../node_modules/tape')
const supertest = require('../node_modules/supertest')
const app = require('../src/server')

test('GET /boxes/5cb77260639fc56da8633b1b', (t) => {
    supertest(app)
      .get('/boxes/5cb77260639fc56da8633b1b')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros')
        t.assert(res.body.files !== undefined, "Retorno Correto")
        t.end()  
      })
})