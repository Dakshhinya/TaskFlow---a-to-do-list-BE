const express = require('express');
require ('dotenv').config()
const cors = require('cors')
const app = express();

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require("./routes/taskRoutes")

app.use(express.json())
app.use(cors());

app.use('/api/auth/',authRoutes);
app.use('/api/task',taskRoutes);


app.listen(3000,()=>{
    console.log('Server listening to port 3000')
})