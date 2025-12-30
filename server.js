const express = require('express');
require ('dotenv').config()
const cors = require('cors')
const app = express();

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require("./routes/taskRoutes")

app.use(express.json())
app.use(cors({
    origin: [
    "http://localhost:5173",                 
    "https://task-flow-frontend-lovat-seven.vercel.app"
  ],
  credentials:true
}));

app.use('/api/auth/',authRoutes);
app.use('/api/task',taskRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

const PORT =process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`Server listening to port ${PORT}`)
})