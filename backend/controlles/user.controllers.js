import User from '../models/user_model.js';

const getusers = async (req, res) => {
    try{
        const id = req.user;    
        const users = await User.find({_id :{$ne:id}}).select('-password');
        res.status(200).json({ users: users });
    }catch(e){
        res.status(500).json({ message: e});
    }
}

export {getusers};
