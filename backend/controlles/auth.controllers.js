import User from '../models/user_model.js';
import bycrypt from 'bcryptjs';
import generatetokenandsettoken from '../utils/generateToken.js';
import dotenv from 'dotenv'; 
dotenv.config();



function login(req, res) {
    const { username, password } = req.body;
    console.log(username);
    User.findOne({ username
    })
        .then((user) => {
            if (!user) return res.status(400).send('User not found');
            const isMatch = bycrypt.compareSync(password, user.password);
            if (!isMatch) return res.status(400).send('Password not match');
            generatetokenandsettoken(user._id,res);
            res.status(200).send({username:user.username});
        })
        .catch((err) => {
            res.status(500).send(err);
        });

}
function signup(req, res) {
    const { username, email, password,con_pass,gender } = req.body;
    if(password !== con_pass) return res.status(400).send("Password not match");
    const date = Date.now();
    const pass = bycrypt.hashSync(password, 10);

    const picture ="https://ui-avatars.com/api/?name="+username;
    
    const user = new User({ username, email, password:pass ,gender,profile_pic:picture,createdAt:date});
    
    generatetokenandsettoken(user._id,res);
    
    user.save()
        .then(() => {
            res.status(201).send({username});
        })
        .catch((err) => {
            res.status(500).send(err);
    });
}
function logout(req, res) {
    try{
        res.clearCookie('jwt');
        res.status(200).send('Logout');
    }catch(e){
        res.status(500).send(err);
    }
}
export { login, logout, signup };