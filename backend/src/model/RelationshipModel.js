const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RelationshipSchema = new Schema({
    question_id:{type: Schema.ObjectId, ref: 'questions'},
    tag_id:{type: Schema.ObjectId, ref: 'tags'},
    createdby:{ type: Schema.ObjectId, ref: 'users' },
    modifiedby:{ type: Schema.ObjectId, ref: 'users' },
}, { timestamps: true })
module.exports = Relationship = mongoose.model('relationships',RelationshipSchema);