const Task = require('../models/taskModel');

const getAllTasks =async (req,res)=>{
    try{
        const tasks = await Task.find();//user_id : req.user.id
        return res.send(tasks);
    }catch(err){
        console.log(err);
    }
}

const getTask = async(req,res)=>{
    try{
        let task = await Task.findById(req.params.id);
        return res.status(200).json(task);
    }catch(err){
        return res.json({msg:"task not found"});
    }
}

const createTask = async (req,res)=>{
    try{
        let task = new Task({
            //user_id:req.user.id,
            title:req.body.data.title,
            desc:req.body.data.desc
        })
        task.save();
        return res.json(task);
    }catch(err){
        console.log(err);
    }
    
}

const updateTask = async(req,res)=>{
    try{
        let updatedtask = await Task.findByIdAndUpdate(req.params.id, req.body.data, {new:true});
        return res.status(200).send(updatedtask)
    }
    catch(err){
        return res.send({msg:"cannot find contact"});
    }
}


const deleteTask =async(req,res)=>{
    try{
        await Task.deleteOne({_id:req.params.id});
        res.json({msg:"deleted"});
    }catch(err){
        res.json({msg:"error occured"});
    }
}




module.exports = {getAllTasks , getTask, createTask, deleteTask, updateTask};