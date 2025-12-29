const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const {createTaskController, displayTaskCotroller}= require('../controller/taskController');

const router = express.Router();

router.post('/create', authMiddleware, createTaskController);
router.get('/list',authMiddleware, displayTaskCotroller);

module.exports = router;
