const express = require("express");
const QuestionController = require("../controllers/QuestionController");
const router = express.Router()



router.post('/',QuestionController. question);
router.put('/:id',QuestionController. updates);
router.get('/view',QuestionController. views);
router.get('/particularview/:id',QuestionController. particularview);
router.patch('/',QuestionController. approval);
module.exports = router
