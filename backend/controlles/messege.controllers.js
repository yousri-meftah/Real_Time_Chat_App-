import Message from '../models/messages.js';    
import Conversation from '../models/conversation.js';

const sendmessage = async (req, res) => {
    const id = req.params.id;
    const senderid = req.user;
    const message = req.body.message;
    console.log(message,id,senderid)
    try{
        let con = await Conversation.findOne({participants:{$all:[senderid,id]}})
        if(con === null){
            con = new Conversation({participants:[id,senderid]});
        }
        const mes = new Message({participant1:senderid,participant2:id,message:message});
        con.messages.push(mes._id);
        
        await Promise.all([con.save(),mes.save()]);
        //con.save();
        //mes.save();
        res.status(200).json({ message: 'Message sent' }); 
    }catch(e){
        res.status(500).json({ message: e});
    }
    
}
export { sendmessage };