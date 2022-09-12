'use strict';

module.exports = (err , req , res , next) => {
    res.status(404).send({
        code: 404,
        message: `Not Found: ${err.message || err}`
    });
}
