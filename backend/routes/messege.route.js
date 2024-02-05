import express from 'express';
import { sendmessage ,getmessages} from '../controlles/messege.controllers.js';
import isLogin from '../middleware/islogin.js';
const routes = express.Router();

routes.post('/send/:id',isLogin,sendmessage);
routes.get('/getmessages/:id',isLogin,getmessages);


export default routes;