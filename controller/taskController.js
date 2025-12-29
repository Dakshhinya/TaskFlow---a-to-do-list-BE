const {createTaskService, displayTaskService} = require('../services/taskService')

const createTaskController=async(req,res)=>{
    console.log('Req.body',req.body)
    
    try{
        const userId = req.user.userId

    const taskData = {
      userId,
      taskname: req.body.taskname,
      priority: req.body.priority,
      start_date: req.body.start_date,
      start_time: req.body.start_time,
      end_date: req.body.end_date,
      end_time: req.body.end_time,
    };

        const newTask = await createTaskService(taskData)
        res.status(201).json(newTask);
    }
    catch (err){
        console.log(err);
        res.status(400).json({message : err.message || 'Failed to create task'})
    }
}

const displayTaskCotroller=async(req,res)=>{
    if (!req.user || !req.user.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
    try{
        // const userId=req.user.userId;
        const taskList = await displayTaskService(req.user.userId)
        res.json({ tasks: taskList });
    }catch (err){
        console.log(err)
        res.status(400).json({message : err.message || 'Failed to display task'})
    }
    
}
module.exports={createTaskController, displayTaskCotroller};