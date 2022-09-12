'use strict';

const server = require('./server.js');
require('dotenv').config();
const {db} = require('./models/index.js');

const port = process.env.PORT || 3001;

db.sync().then(() => {
    server.start(port);
}
).catch((err) => {
    console.log(err);
}
);


