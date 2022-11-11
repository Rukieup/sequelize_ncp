// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// 기본주소: localhost:PORT/user
// GET / -> localhost:PORT/user
router.get('/', controller.main); 

// GET /user/signup
router.get('/signup', controller.getSignup);

// GET /user/signin
router.get('/signin', controller.getSignin);

// POST /user/signup 
router.post('/signup', controller.postSignup);

// POST /user/signin
router.post('/signin', controller.postSignin);

// POST /user/profile
router.post('/profile', controller.postProfile);

// POST /user/profile/edit
router.post('/profile/edit', controller.patchProfile);

// POST /user/profile/delete
router.post('/profile/delete', controller.deleteProfile);

router.post('/checkid')

module.exports = router;