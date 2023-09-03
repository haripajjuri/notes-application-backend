const express = require('express');
const router = express.Router();
const {getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/taskController');
const { validateToken } = require('../validateToken');

router.route('/getAllTasks').get(validateToken ,getAllTasks);

router.route('/getTask/:id').get(validateToken,getTask);

router.route('/createTask').post(validateToken,createTask);

router.route('/deleteTask/:id').delete(validateToken,deleteTask);

router.route('/updateTask/:id').put(validateToken,updateTask);

module.exports = router;