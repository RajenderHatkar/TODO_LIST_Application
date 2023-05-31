const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/Todo_DB',{ useNewUrlParser: true })

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error to connect the db'));

db.once('open',function(){
    console.log('Successfully connected to the DataBase!!!');
});