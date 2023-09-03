const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');

app.use("*",cors({
    origin:true,
    credentials:true
}));

const validateToken = require('../backend/validateToken');
const cookie = require('cookie-parser')
app.use(cookie());
app.use(express.json());
app.use('/task/',require('./routers/taskRoutes'));
app.use('/user/',require('./routers/userRoutes'));
url="mongodb://127.0.0.1:27017/tasksApp"

mongoose.connect(url).then(()=>{
    console.log("database is connected");
}).catch(err=>{console.log("error occured")});

const port = 3001;
app.listen(port,()=>{
    console.log("server started on port 3001");
})