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
});

describe('GET users API and stories API', () => {

    describe('Using Authorization to GET /users from Users Table', () => {
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

    describe('POST /login', () => {
        let data = {
            "username": "dummy1",
            "password": "dummy"
        }
        test('should respond with 200 and JSON object', () => {
            return request(server)
                .post('/login')
                .send(data)
                .set('Accept', `application/json`)
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                    expect(response.type).toBe('application/json')
                })
        })

        //Error Status Codes
        it('should return 401 if a field is missing', async () => {
            let response = await request(server)
                .post('/login')
                .send({ username: 'dummy1' })

                expect(response.status).toBe(401);

                reponse = await request(server)
                .post('/login')
                .send({ password: 'dummy' })

                expect(response.status).toBe(401)
        })

        it('should return 401 if either/both of the fields are incorrect', async() => {
            let response = await request(server)
                .post('/login')
                .send({ username: 'wrongUN', password: 'wrongPW' })

                expect(response.status).toBe(401)
        })
      });

})
