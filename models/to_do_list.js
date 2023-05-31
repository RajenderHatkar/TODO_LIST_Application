const mongoose = require('mongoose');
const to_do_ListSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})

const TodoList = mongoose.model('TodoList', to_do_ListSchema);
module.exports  = TodoList;