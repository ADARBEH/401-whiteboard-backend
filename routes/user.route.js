'use stricrt';

const router = require('express').Router();
const userAuth = require('../middlewares/userAuth');
const { signup, signin , allUser } = require('../controllers/usercontrollers');
const bearerAuth = require('../middlewares/bearer-auth');

router.post('/login', signin);

router.post('/signup',userAuth , signup);

router.get('/users', bearerAuth, allUser)


module.exports = router;

