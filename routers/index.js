const express=require('express');
const router= express.Router();
const mongoose=require('mongoose');
const homeController=require('../controller/home_controller');
console.log('hey router is working');

router.get('/',homeController.home);
// create todo list
router.post('/create_TO_Do_LIST',homeController.createTodo);
//delete todo router
router.post('/delete_todo',homeController.deleteTodo)


module.exports=router;    