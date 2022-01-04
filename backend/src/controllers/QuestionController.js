
const Question = require('../model/QuestionModel');

module.exports={
    question: async (req, res) => {
	
	const question = new Question(req.body);
	try{

        console.log(question);
        
        await question.save()
        
        .then((e)=>res.status(201).send(e))
        
        .catch((e)=>console.log(e))
        
        }catch (err){
        
        res.status(500).send();
        
        }
}
}

