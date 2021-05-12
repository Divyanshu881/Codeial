const express= require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');


console.log(`Router Loded`);

router.get('/',homeController.home);
router.use('/users',require('./users'));
//router.use('/users',require('./users'));

module.exports=router;