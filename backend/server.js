import dotenv from 'dotenv'; 
dotenv.config();
import express from 'express';
import routes from './routes/auth.route.js';
import messageroutes from './routes/messege.route.js';
import cookieParser from 'cookie-parser';
import userroutes from './routes/userroutes.js';    
import cors from 'cors';

const app = express();

import './config/db.js';


app.use(cors())
app.use(express.json()); // for parsing application/json
app.use(cookieParser());


app.get('/', (req, res) => {res.status(200).send('Helaaaalo World')});
app.use('/api/auth',routes)
app.use('/api/messages',messageroutes)
app.use('/api/users',userroutes)


app.listen(process.env.PORT, () => {console.log('Server is running '  + process.env.PORT)});            