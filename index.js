'use strict';

const server = require('./server.js');
require('dotenv').config();
const {db} = require('./models/index.js');


db.sync().then(() => {
    server.start(process.env.PORT);
}
).catch((err) => {
    console.log(err);
}
);


