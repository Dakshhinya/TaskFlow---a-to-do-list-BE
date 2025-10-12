const express = require('express');
require ('dotenv').config()

const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors());


app.listen(5433,()=>{
    console.log('Server listening to port 5432')
})