require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 4000;
const app = express();
const user = require('./route/UserRoute')
const {DB}=require('./configuration/Config')
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors());


mongoose.connect(DB,{
    useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log({err: err });
})
app.use('/api/user',user);

app.listen(port,(err)=>{
if(err){
    console.log( {err : err});
}
console.log("server running on port" +port);
});