const request = require('supertest');

const server = require('./server.js');

let token;

beforeAll((done) => {
    request(server)
        .post('/login')
        .send({
            username: 'DS',
            password: '123456'
        })
        .end((err, response) => {
            token = response.body.token;
            done();
        })
})

describe('API users', () => {

    describe('GET /users from Users Table', () => {
        it('should return 401 when no auth is passed', async () => {
            const response = await request(server).get('/users');
            expect(response.status).toBe(401)
        })

        test('should respond with 200 and JSON object', () => {
            return request(server)
                .get('/users')
                .set('Authorization', `${token}`)
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                    expect(response.type).toBe('application/json');
                })
        })

    })

})