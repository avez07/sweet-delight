import db from '../config/db.js';


const login = async (req,res)=>{
    const body = req.body
db.collection('user_login').find(body).toArray();
}
export default login;