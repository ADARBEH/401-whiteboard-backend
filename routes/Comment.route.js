'use strict';

const express = require('express');
const router = express.Router();

const { Comment } = require('../models/index');


router.get('/comment', getallcomment);
router.get('/comment/:id', getonecomment);
router.post('/comment', createcomment);
router.put('/comment/:id', updatecomment);
router.delete('/comment/:id', deletecomment);


function getallcomment(req, res) {
    Comment.read().then((data) => {
        res.status(200).json(data);
    });
}

function getonecomment(req, res) {
    let id = Number(req.params.id);
    if (typeof id === 'number' && !Number.isNaN(id)) {
        Comment.read(id).then((data) => {
            res.status(200).json(data);
        });
    }
    else {
        res.status(500).json({ message: 'Server Error' });
    }
}


async function createcomment(req, res) {
    const obj = req.body;
    Comment.create(obj).then((data) => {
        res.status(201).json(data);
    });
}

function updatecomment(req, res) {
    const id = Number(req.params.id);
    const obj = req.body;
    if (typeof id === 'number' && !Number.isNaN(id)) {
        Comment.update(id, obj).then((data) => {
            res.status(204).json(data);
        });
    }
    else {
        res.status(500).json({ message: 'Server Error' });
    }
}

function deletecomment(req, res) {
    const id = Number(req.params.id);
    Comment.delete(id).then((data) => {
        res.status(200).json(data);
    });
}

module.exports = router;
