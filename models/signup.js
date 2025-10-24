const pool=require('../DB/Database');

const createUser = async({username, email, password})=>{
    const result = await pool.query('INSERT INTO USERS(username, email, password) VALUES($1,$2,$3) RETURNING *',[username, email, password]);
    return result.rows[0];
}

module.exports = createUser;