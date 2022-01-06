const express = require("express");
const QuestionController = require("../controllers/QuestionController");
const JwtHelpers = require("../middleware/JwtHelpers");
const router = express.Router()



router.post('/',JwtHelpers.checkPermission,QuestionController. question);
router.put('/:id',JwtHelpers.checkPermission,QuestionController. updates);
router.get('/view',JwtHelpers.checkPermission,QuestionController. views);
router.get('/particularview/:id',JwtHelpers.checkPermission,QuestionController. particularview);
router.patch('/',JwtHelpers.checkPermission,QuestionController. approval);
module.exports = router
