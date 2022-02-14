const connectDB = require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const cakes = require('./routes/cakes')
require('dotenv').config()
//middleware
// app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks',tasks)
app.use('/api/v1/cakes',cakes)
app.use((req,res) => {
    res.status(404).send('test not found')
})

const port = 5000

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server is listening on port ${port},,,`))
    }catch (error){
        console.error(error);
    }
}

start();
