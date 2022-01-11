const express = require("express");
const router = express.Router()

const TagController = require("../controllers/TagController");
const JwtHelpers = require("../middleware/JwtHelpers");


router.post('/',JwtHelpers.checkPermission,  TagController.createTag);
router.delete('/:id',JwtHelpers.checkPermission, TagController.deleteTag);
router.get('/',JwtHelpers.checkPermission, TagController.viewTag);
module.exports = router