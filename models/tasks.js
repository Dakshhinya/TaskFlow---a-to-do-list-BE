const pool = require('../DB/Database')

const createTask = async ({ userId, taskname, priority, start_date, start_time, end_date, end_time, status }) =>{
    const result = await pool.query(
        `INSERT INTO tasks (userId, taskname, priority, start_date, start_time, end_date, end_time, status) VALUES($1,$2,$3,$4,$5,$6,$7, $8) RETURNING *`,
        [userId, taskname, priority, start_date, start_time, end_date, end_time, status]
    );
    return result.rows[0];
}

const displayTask = async (userId)=>{
    const result = await pool.query(
        `SELECT * FROM tasks where userId = $1 ORDER BY taskid DESC`,
        [userId]
    )
    return result.rows;
}
// const updateTask = async({userId, taskname,})
module.exports ={createTask, displayTask}
