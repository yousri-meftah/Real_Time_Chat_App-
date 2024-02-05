import express from 'express';
import { login, logout, signup } from '../controlles/auth.controllers.js';

const routes = express.Router();

routes.post('/signup', signup );
routes.post('/login', login );
routes.post('/logout', logout);

export default routes;  