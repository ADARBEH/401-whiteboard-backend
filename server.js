'use strict';
const express = require('express');
const app = express();
const cors = require('cors');

const commentRoute = require('./routes/Comment.route');
const postRoute = require('./routes/post.route');
const router = require('./routes/user.route');


app.use(cors());
app.use(express.json());
app.use(commentRoute);
app.use(postRoute);
app.use(router)


app.get('/' , (req, res) =>{
    res.send('Hello World');
})

app.use('*', (req, res) => {
    res.status(404).send({
        message: 'Not Found'
    });
}
);



function start(port) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}


module.exports = {
    start: start,
    app: app
}

