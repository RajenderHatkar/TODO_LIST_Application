const TodoList = require('../models/to_do_list');
const mongoose=require('mongoose');
module.exports.home=function(req, res){
    //return res.end('<h1>Express is up<h1>');
    TodoList.find({},function(err,todo){
        if(err){
            console.log('error in fetching data');
            return
        }
        
        return res.render('home',{
            title:"TO Do List Application",
            todoList:todo
           
        })
    })
   /* return res.render('home',{
        title:'TO DO LIST'
    })*/
}

// creating to do list
module.exports.createTodo = function(req,res){
    console.log(req.body.description);  
    console.log(req.body.category);
    console.log(req.body.date);
    /*let duedate=req.body.date;
    console.log(duedate)
    const myAr= duedate.split("-");
    console.log(myAr);
    const dat=myAr[0]+"-"+myAr[1]+"-"+myAr[2]
    console.log(dat);*/
    
    TodoList.create({ // crating new todo and storing into DB
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
       
    },function(err,newtodo){
        if(err){
            console.log('Error in creating to_do_List_ in DATA BASE');
            return;
        }
        console.log('Created...!!!!', newtodo);
        return res.redirect('/')
    })
}
//deleting a todo list
module.exports.deleteTodo = function(req,res){ 
    let list = req.query.id; // getting the id from ui
   //console.log(list)
   let  listArr= list.split(','); 
  //console.log(listArr)
    for(let i=0;i<listArr.length;i++){ // looping over newsp  to delete all the checked value
        TodoList.findByIdAndDelete(listArr[i],function(err){
            if(err){
                console.log('err')
                return;
            }
        })
    }
return res.redirect('/');
}
