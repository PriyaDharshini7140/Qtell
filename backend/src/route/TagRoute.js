const express = require("express");
const router = express.Router()

const TagController = require("../controllers/TagController");
const JwtHelpers = require("../middleware/JwtHelpers");


// JwtHelpers.checkPermission
router.post('/createtag',TagController.createTag);
router.delete('/deletetag/:id',TagController.deleteTag);
router.get('/viewtag',  TagController.viewTag);
router.get('/sorttag',  TagController.sortTag);
module.exports = router