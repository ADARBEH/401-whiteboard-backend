'use strict';

const server = require('./server.js');
require('dotenv').config();
const {db} = require('./models/index.js');

const PORT = process.env.PORT || 3000;

db.sync( ).then(() => {
    server.start(PORT);
}
).catch((err) => {
    console.log(err);
}
);


