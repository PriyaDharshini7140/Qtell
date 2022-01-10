require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 4000;
const app = express();
const tag = require("./route/TagRoute");
const user = require("./route/UserRoute");
const question = require("./route/QuestionRoute");


const { DB } = require('./configuration/Config')
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongodb connected");
}).catch((err) => {
    console.log({ err: err });
})
app.use('/api/tag', tag);
app.use('/api/user', user);
app.use('/api/question', question);
//app.use('/api/question/:id',question);

app.listen(port, (err) => {
    if (err) {
        console.log({ err: err });
    }
    console.log("server running on port" + port);
});


