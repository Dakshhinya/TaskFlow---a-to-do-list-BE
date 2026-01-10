const pool=require('../DB/Database');

const createUser = async({username, email, password})=>{
const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]);
        return result.rows[0];
}

module.exports = createUser;