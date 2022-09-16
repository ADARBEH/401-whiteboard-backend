'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);



describe('Post Route', () => {

    it('get all posts', async () => {
        const response = await request.get('/post');
        expect(response.status).toBe(200);
    }
    );


    it('get one post', async () => {
        const response = await request.get('/post/1');
        expect(response.status).toBe(200);
    }
    );


    it('create a post', async () => {
        const response = await request.post('/post').send({
            title: 'anything',
            content: 'anything',
        });
        expect(response.status).toBe(201);
    }
    );


    it('update a post', async () => {
        const response = await request.put('/post/1').send({
            title: 'anything',
            content: 'anything',
        });
        expect(response.status).toBe(204);
    });


    it('delete a post', async () => {
        const response = await request.delete('/post/1');
        expect(response.status).toBe(200);
    });


}
);