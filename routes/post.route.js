'use strict';

const express = require('express');
const router = express.Router();
const bearerAuth = require('../middlewares/bearer-auth');

const { Post , commentModel } = require('../models/index');


router.get('/post', getallPosts);
router.get('/post/:id', getonePost);
router.post('/post', createPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);


function getallPosts(req, res) {
    Post.readWithComments(commentModel).then((data) => {
        res.status(200).json(data);
    });
}



function getonePost(req, res) {
    let id = Number(req.params.id);
    if (typeof id === 'number' && !Number.isNaN(id)) {
        Post.read(id).then((data) => {
            res.status(200).json(data);
        });
    }
    else {
        res.status(500).json({ message: 'Server Error' });
    }
}


function createPost(req, res) {
    const obj = req.body;
    Post.create(obj).then((data) => {
        res.status(201).json(data);
    });
}

function updatePost(req, res) {
    const id = Number(req.params.id);
    const obj = req.body;
    if (typeof id === 'number' && !Number.isNaN(id)) {
    Post.update(id, obj).then((data) => {
        res.status(204).json(data);
    });}
    else {
        res.status(500).json({ message: 'Server Error' });
    }
}

function deletePost(req, res) {
    const id = Number(req.params.id);
    Post.delete(id).then((data) => {
        res.status(200).json(data);
    });
}


module.exports = router;
