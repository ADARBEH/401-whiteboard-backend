'use stricrt';

const router = require('express').Router();
const userAuth = require('../middlewares/userAuth');
const { signup, signin } = require('../controllers/usercontrollers');

router.post('/login', signin);

router.post('/signup',userAuth , signup);


module.exports = router;

