const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    role_id:{type: Schema.ObjectId, ref: 'roles'},
    name:{type:String,required:true},
    email_id:{type:String,required:true},
    designation:{type:String,required:true},
    password:{type:String,required:true},
    token:{type:String},
    refresh_token:{type:String},
    createdby:{ type:String,default:"" },
    modifiedby:{ type:String,default:"" }
}, { timestamps: true })
module.exports = User = mongoose.model('users',UserSchema);