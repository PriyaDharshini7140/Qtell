
const Tag = require('../model/TagModel');
module.exports = {
    createTag: async (req, res) => {
        const tag = new Tag(req.body);
        try {
            console.log(tag);
            await tag.save()
                .then((e) => res.status(201).send(e))
        } catch (err) {
            res.status(500).send({error:"Tag Doesn't Created"});
        }
    },
    deleteTag: async (req, res) => {
        try {
            const doc = await Tag.findById({ _id: req.params.id })
            if (doc) {
                await Tag.findByIdAndRemove({ _id: req.params.id })
                res.status(201).send({ Result: "Deleted Successfully" })
            }
            else {
                res.send({ error: "Tag doesn't exist!" })
            }
        } catch (err) {
            res.status(500).send({ error: "Invalid Id" });
        }
    },
    viewTag: async (req, res) => {
        const list = await Tag.find()
        try {
            console.log(list)
            res.send(list)
        } catch (err) {
            res.status(404)

        }
    }
};
