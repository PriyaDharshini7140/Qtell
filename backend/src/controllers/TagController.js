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
    },
    deletetag:async(req,res)=>{
        try {
            await Tag.deleteOne({ _id: req.params.id })
            res.status(204).send()
        } catch {
            res.status(404)
            res.send({ error: "Tag doesn't exist!" })
        }
    },
    viewtag:async(req,res)=>{
        const list=await Tag.find()
        try {
            console.log(list)
            res.send(list)
        } catch(err) {
            res.status(404)
           
        }
    }
}