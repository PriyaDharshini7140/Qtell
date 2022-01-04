const express = require("express");
const QuestionController = require("../controllers/QuestionController");
const router = express.Router()



router.post('/question',QuestionController. question);


module.exports = router