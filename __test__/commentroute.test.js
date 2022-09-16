'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('Comment Route', () => {

    it('get all comments', async () => {
        const response = await request.get('/comment');
        expect(response.status).toBe(200);
    }
    );


    it('get one comment', async () => {
        const response = await request.get('/comment/1');
        expect(response.status).toBe(200);
    }
    );


    it('create a comment', async () => {
        const response = await request.post('/comment').send({
            content: 'anything',
            ownerID: 1
        });
        expect(response.status).toBe(201);
    }
    );


    it('update a comment', async () => {
        const response = await request.put('/comment/1').send({
            content: 'anything',
            ownerID: 1
        });
        expect(response.status).toBe(204);
    });


    it('delete a comment', async () => {
        const response = await request.delete('/comment/1');
        expect(response.status).toBe(200);
    });

}
);