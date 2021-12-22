const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TagSchema = new Schema({
    technology_name:{type:String,required:true},
    createdby:{ type: Schema.ObjectId, ref: 'users' },
    modifiedby:{ type: Schema.ObjectId, ref: 'users' }
}, { timestamps: true })
module.exports = Tag = mongoose.model('tags',TagSchema);