const express = require("express");
const router = express.Router()

const TagController = require("../controllers/TagController");
const JwtHelpers = require("../middleware/JwtHelpers");



router.post('/createtag', JwtHelpers.checkPermission, TagController.createTag);
router.delete('/deletetag/:id', JwtHelpers.checkPermission, TagController.deleteTag);

router.post('/tag',JwtHelpers.checkPermission,TagController.tag);
router.delete('/deletetag/:id',JwtHelpers.checkPermission,TagController.deletetag);



router.get('/viewtag', JwtHelpers.checkPermission, TagController.viewTag);
module.exports = router