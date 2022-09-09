const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
    test('It should response with 200 success', async () => {
        const response = await request(app)
            .get('/launches')
            .expect('Content-type', /json/)
            .expect(200);
    });
});

describe('Test POST /launches', () => {
    test('It should response with 200 success', () => {

    });

    test('It should catch missing required properties', () => {});
    test('It should catch invalid dates', () => {});
});