const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
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

UserSchema.pre('save', async function (next) {
    try {
      if (this.isNew) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
      }
      next()
    } catch (error) {
      next(error)
    }
  })
  
  UserSchema.methods.isValidPassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.password)
    } catch (error) {
      throw error
    }
  }
  UserSchema.methods.ValidPassword = async function (password) {
    try {
        if(password === this.password){
            return await password
        }
     
    } catch (error) {
      throw error
    }
  }
module.exports = User = mongoose.model('users',UserSchema);