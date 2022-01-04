
const JwtHelpers = require('../middleware/JwtHelpers');
const User = require('../model/UserModel');

module.exports={
    login:async(req,res)=>{
        var email=req.body.email_id
        var password=req.body.password
        console.log(email,password);
        try{
            const user  = await User.findOne({email_id:email})
            console.log(user);
            if(!user){
                res.status(404).send({error:"user not found"});
            }
            const verifyPassword = await user.ValidPassword(password) 
          
            if(!verifyPassword){
                res.status(401).send({error:"password is invalid"});
            }
            const token = await JwtHelpers.CreateToken(user);
            const refresh_token = await JwtHelpers.RefreshToken(user)
            user.token = token
            user.refresh_token = refresh_token
            await user.save()
                 res.status(200).send({token,refresh_token})
             }
            
                
                 catch (err) {
                    res.status(500).send({error:err.message});
                }
       
    }
}