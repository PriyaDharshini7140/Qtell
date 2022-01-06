
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
            const verify_password = await user.ValidPassword(password) 
          
            if(!verify_password){
                res.status(401).send({error:"password is invalid"});
            }
            const token = await JwtHelpers.CreateToken(user._id);
            const refresh_token = await JwtHelpers.RefreshToken(user._id)
            user.token = token
            user.refresh_token = refresh_token
            await user.save()
                 res.status(200).send({token,refresh_token})
             }
            
                
                 catch (err) {
                    res.status(500).send({error:err.message});
                }
       
    },
    refresh_token:async(req,res)=>{
        const verify_refresh_Token = req.body.refresh_token
        try {
            if(!verify_refresh_Token){
                res.status(401).send({error:"Unauthorized Request"})
            }
            const user_id = await JwtHelpers.verifyRefreshToken(refreshToken);
            const user  = await User.findById(user_id)
            console.log(user);
        
            const token = await JwtHelpers.CreateToken(user_id);
            const refresh_token = await JwtHelpers.RefreshToken(user_id)
            user.token = token
            user.refresh_token = refresh_token
            await user.save()
            res.send({ token,refresh_token})
        } catch (error) {
            
        }
    }
}