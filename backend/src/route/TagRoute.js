const express = require("express");
const router = express.Router()

const TagController = require("../controllers/TagController");
const JwtHelpers = require("../middleware/JwtHelpers");


router.post('/',  TagController.createTag);
router.delete('/:id', TagController.deleteTag);
router.get('/view', TagController.viewTag);
module.exports = router