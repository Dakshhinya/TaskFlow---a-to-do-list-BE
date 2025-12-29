const {createTask, displayTask} = require('../models/tasks')

const createTaskService= async(taskData)=>{
    const task = await createTask (taskData)
    return task;
}

const displayTaskService = async(userId)=>{
    const task = await displayTask(userId)
    return task;
}

module.exports={createTaskService, displayTaskService}