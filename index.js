'use strict';

const server = require('./server.js');
require('dotenv').config();
const {db} = require('./models/index.js');


db.sync().then(() => {
    const port = process.env.PORT || 3001;
    server.start(port);
}
).catch((err) => {
    console.log(err);
}
);


