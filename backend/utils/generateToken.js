import jwt from 'jsonwebtoken';

import dotenv from 'dotenv'; 
dotenv.config();

const secretKey = process.env.JWT_SECRET;
const expiresIn = '15d';

function generatetokenandsettoken(userid,res){
    const token = jwt.sign({userid},secretKey,{expiresIn});
    res.cookie('jwt',token,{
        httpOnly:true,
        sameSite : true,
        maxAge: 24*60*60*1000
    });
}
export default generatetokenandsettoken;