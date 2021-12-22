const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoleSchema = new Schema({
    role:{type:String,required:true},
    createdby:{ type: Schema.ObjectId, ref: 'users' },
    modifiedby:{ type: Schema.ObjectId, ref: 'users' }
}, { timestamps: true })
module.exports = Role = mongoose.model('roles',RoleSchema);