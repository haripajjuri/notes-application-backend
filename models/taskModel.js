const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId
    },
    title:{
        type:"string",
        required:true
    },
    desc:{
        type:"string",
        required:true
    },
},{
    timestamps:true,
}
);

module.exports = mongoose.model("Task",taskSchema);