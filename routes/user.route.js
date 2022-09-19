'use stricrt';

const router = require('express').Router();
const userAuth = require('../middlewares/userAuth');

router.post('/login', (req, res) => {
    res.send('Login');
}
);

router.post('/signup',userAuth , (req, res) => {
    res.send('Signup');
}
);

module.exports = router;

