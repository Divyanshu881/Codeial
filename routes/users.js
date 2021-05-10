const express= require('express');
const router=express.Router();
const usersController=require('../controller/users_controller');

router.get('/profile',usersController.profile);

router.get('/post',usersController.post);

router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIp);

module.exports=router;