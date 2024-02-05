import express from 'express';
import isLogin from '../middleware/islogin.js';
import {getusers} from '../controlles/user.controllers.js';
const routes = express.Router();

routes.get('/',isLogin,getusers);



export default routes;