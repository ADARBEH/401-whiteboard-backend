'use strict';

const express = require('express');
const router = express.Router();

const { Post } = require('../models/index');


router.get('/post', getallPosts);
router.get('/post/:id', getonePost);
router.post('/post', createPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);


function getallPosts(req, res) {
    Post.findAll().then((data) => {
        res.status(200).json(data);
    });
}

function getonePost(req, res) {
    let id = Number(req.params.id);
    console.log(id);
    if (typeof id === 'number' && !Number.isNaN(id)) {
        Post.findOne({ where: { id: req.params.id } }).then((data) => {
            res.status(200).json(data);
        });
    }
    else {
        res.status(500).json({ message: 'Server Error' });
    }
}


function createPost(req, res) {
    Post.create(req.body).then((data) => {
        res.status(201).json(data);
    });
}

function updatePost(req, res) {
    const id = Number(req.params.id);
    if (typeof id === 'number' && !Number.isNaN(id)) {
    Post.update(req.body, { where: { id: req.params.id } }).then((data) => {
        res.status(204).json(data);
    });}
    else {
        res.status(500).json({ message: 'Server Error' });
    }
}

function deletePost(req, res) {
    Post.destroy({ where: { id: req.params.id } }).then((data) => {
        res.status(200).json(data);
    });
}

module.exports = router;
