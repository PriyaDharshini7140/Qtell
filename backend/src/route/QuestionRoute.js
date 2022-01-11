const express = require("express");
const QuestionController = require("../controllers/QuestionController");
const JwtHelpers = require("../middleware/JwtHelpers");
const router = express.Router()



router.post('/',JwtHelpers.checkPermission,  QuestionController.createQuestion);
router.put('/:id', JwtHelpers.checkPermission, QuestionController.updateQuestion);
router.get('/',JwtHelpers.checkPermission,  QuestionController.viewQuestion);
router.get('/:id',JwtHelpers.checkPermission,  QuestionController.viewparticularQuestion);
router.patch('/', JwtHelpers.checkPermission, QuestionController.approveQuestion);
module.exports = router
