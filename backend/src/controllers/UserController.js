
const User = require('../model/UserModel');

module.exports={
    login:async(req,res)=>{
        var email=req.body.email_id
        var password=req.body.password
        console.log(email,password);
        try{
            const user  = await User.findOne({email_id:email})
       
            if(!user){
                res.status(404).send({error:"user not found"});
            }
            const verifyPassword = await user.ValidPassword(password) 
          
            if(!verifyPassword){
                res.status(401).send({error:"password is invalid"});
            }
                     console.log(user);
                 res.status(200).send(user)
             }
            
                
                 catch (err) {
                    res.status(500).send({error:err.message});
                }
       
    }
}