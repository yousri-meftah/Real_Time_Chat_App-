import dotenv from 'dotenv'; 
import express from 'express';
import routes from './routes/auth.route.js';
const app = express();
dotenv.config();
import './config/db.js';



app.use(express.json());



app.get('/', (req, res) => {res.status(200).send('Helaaaalo World')});
app.use('/api/auth',routes)


app.listen(process.env.PORT, () => {console.log('Server is running '  + process.env.PORT)});            