import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'; 
dotenv.config();
const isLogin = (req, res, next) => {
    // Check if the JWT token exists in the cookies
    const token = req.cookies.jwt;
    
    if (token) {
        try {
            // Verify the JWT token
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            // If the token is valid, save the user credentials in the req object
            req.user = decoded.userid;
            
            next(); // Call the next middleware or route handler
        } catch (error) {
            // If the token is invalid or expired, send an error response
            res.status(401).json({ error: 'Unauthorized' });
        }
    } else {
        // If the token does not exist, send an error response
        res.status(401).json({ error: 'you should be login ' });
    }
};

export default isLogin;