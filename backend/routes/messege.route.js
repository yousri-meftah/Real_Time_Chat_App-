import express from 'express';
import { sendmessage } from '../controlles/messege.controllers.js';
import isLogin from '../middleware/islogin.js';
const routes = express.Router();

routes.post('/send/:id',isLogin,sendmessage);

export default routes;