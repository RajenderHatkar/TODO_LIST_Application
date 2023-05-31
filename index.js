const express=require('express');
const app=express();
const port=8002;

// mongoose linking DB
const mongoose=require('mongoose');
const db=require('./config/mongoose');
//assets
app.use(express.static('./assests'));
app.use("/", express.static(__dirname + '/'));

//  set up routersc
app.use(express.urlencoded());
app.use('/',require('./routers'));

//views ejs

app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        //console.log('error in running',err);
        //interpolasation
        console.log(`error in running',${err}`);
    }
    console.log(`server is running fine on port:${port}`);

});