const {SECRET_KEY,TOKEN_EXPIRE,REFRESH_SECRET_KEY,REFRESH_TOKEN_EXPIRE} = require('../configuration/Config');
const jwt = require("jsonwebtoken")
module.exports={
    CreateToken : (user)=>{
        return jwt.sign({user_id:user},SECRET_KEY,{
            expiresIn:TOKEN_EXPIRE
        })
    },
    checkPermission:async (req, res, next) => {
 
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
    
  },
  RefreshToken:(user)=>{
    return jwt.sign({user_id:user},REFRESH_SECRET_KEY,{
        expiresIn:REFRESH_TOKEN_EXPIRE
    })
},
verifyRefreshToken: async (refreshToken) => {
    try {
      const verified = await jwt.verify(refreshToken, REFRESH_SECRET_KEY);
      console.log("verification",verified);
    const user_id = verified.user_id;
      return user_id
    } catch (error) {
      res.status(400).json({ error: "Authentication Error: Invalid Token" });
    }
  }

}
