const Question = require("../model/QuestionModel");



module.exports={
    createQuestion: async (req, res) => {
	
	const question = new Question(req.body);
	try{

        console.log(question);
        
        await question.save()
        
        .then((e)=>res.status(201).send(e))
        
        .catch((e)=>console.log(e))
        
        }catch (err){
        
        res.status(500).send({error:"Question Doesn't Created"});
        
        }
},
updateQuestion: async (req, res) =>  {
	const updates = await Question.findByIdAndUpdate({_id: req.params.id },req.body)
	 try {
	
		console.log(updates);

		 await updates.save()
		res.send(updates)
	} catch (err){
		res.status(500).send({error:"Updation Failed"});
	}
},
viewQuestion: async (req,res) => {
	const view = await Question.find()
	try{
		console.log(view)
		res.send(view)
}
catch (err){
	res.status(500);
}
},
viewparticularQuestion: async (req,res) => {
	const pview = await Question.findOne({ _id: req.params.id })
	try{
		console.log(pview)
		res.send(pview)
}
catch (err){
	res.status(500);
}
},
approveQuestion: async (req, res) => {
	try {
		const approve = await Question.findById(req.body._id);

			approve.is_active = req.body.is_active;
			approve.is_approved = req.body.is_approved;
		

		await approve.save();
		res.send(approve);
	} catch {
		res.status(500).send({error:"Error Occured"});
	}
},
};
