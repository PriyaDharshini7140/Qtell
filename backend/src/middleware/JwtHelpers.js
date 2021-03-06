const {SECRET_KEY,TOKEN_EXPIRE} = require('../configuration/Config');
const jwt = require("jsonwebtoken")
module.exports={
    CreateToken : (user)=>{
        return jwt.sign({user_id:user._id},SECRET_KEY,{
            expiresIn:TOKEN_EXPIRE
        })
    },
    checkPermission:() => {
    return async (req, res, next) => {
      const token = req.headers.authorization.split(' ')[1]
     console.log("token",token);
      if (!token) {
       
        return res.status(401).json({ error: "Unauthorized Request" });
      }
  
      try {
        const verified = await jwt.verify(token, SECRET_KEY);
        console.log("verification",verified);
       req.user_id = verified.user_id;
        next();
      } catch (error) {
        res.status(400).json({ error: "Authentication Error: Invalid Token" });
      }
    }
  }
}

