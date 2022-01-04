
const Tag = require('../model/TagModel');
module.exports={
    tag:async(req,res)=>{
        const tag = new Tag(req.body);
        try{
            console.log(tag);
            await tag.save()
           .then((e)=>res.status(201).send(e))
            .catch((e)=>console.log(e))
           }catch (err){
            res.status(500).send(); 
            }
    }
}