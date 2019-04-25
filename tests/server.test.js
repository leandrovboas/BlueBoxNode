const test = require('../node_modules/tape')
const request = require('../node_modules/supertest')
const app = require('../src/server')

//test('GET /boxes/5cb77260639fc56da8633b1b', (t) => {
//    request(app)
//      .get('/boxes/5cb77260639fc56da8633b1b')
//      .expect('Content-Type', /json/)
//      .expect(200)
//      .end((err, res) =>{
//        t.error(err, 'Sem erros')
//        t.assert(res.body.files !== undefined, "Retorno Correto")
//        t.end()  
//      })
//});

test('Correct users returned', function (t) {
  request(app)
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedUsers = ['John', 'Betty', 'Hal'];

      t.error(err, 'No error');
      t.same(res.body, expectedUsers, 'Users as expected');
      t.end();
    });
});