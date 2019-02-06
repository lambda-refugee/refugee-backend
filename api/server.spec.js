const request = require('supertest');

const server = require('./server.js');

var token;

beforeAll((done) => {
    request(server)
        .post('/login')
        .send({
            username: 'DSS',
            password: '123456'
        })
        .end((err, response) => {
            token = response.body.token;
            done();
        })
})

describe('API users', () => {

    describe('Using Authorization to GET /users from Users Table', () => {
        it('should return 401 when no auth is passed', async () => {
            const response = await request(server).get('/users');
            expect(response.status).toBe(401)
        })

        test('should respond with 200 and JSON object when token is passed', () => {
            return request(server)
                .get('/users')
                .set('Authorization', `${token}`)
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                    expect(response.type).toBe('application/json');
                })
        })

    })

    describe('GET /stories from Stories API', () => {
        it('should return 200 and JSON object', async() => {
            return request(server)
                .get('/stories')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                    expect(response.type).toBe('application/json')
                })
           
        }) 
    })

    // describe('POST /users', function() {
    //     it('responds with json', function(done) {
    //       request(server)
    //         .post('/users')
    //         .send({username: 'DSS', password: '123456'})
    //         .set('Accept', 'application/json')
    //         .expect(200)
    //         .end(function(err, res) {
    //           if (err) return done(err);
    //           done();
    //         });
    //     });
    //   });

})