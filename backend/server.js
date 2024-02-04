import dotenv from 'dotenv'; 
dotenv.config();
import express from 'express';
import routes from './routes/auth.route.js';
const app = express();

import './config/db.js';



app.use(express.json()); // for parsing application/json



app.get('/', (req, res) => {res.status(200).send('Helaaaalo World')});
app.use('/api/auth',routes)


app.listen(process.env.PORT, () => {console.log('Server is running '  + process.env.PORT)});            