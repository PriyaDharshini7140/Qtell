const express = require("express");
const router = express.Router()

const TagController = require("../controllers/TagController");


router.post('/tag',TagController.tag);
router.post('/deletetag/:id',TagController.deletetag);

router.get('/viewtag',TagController.viewtag);
module.exports = router