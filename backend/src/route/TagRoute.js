const express = require("express");
const router = express.Router()

const TagController = require("../controllers/TagController");


router.post('/tag',TagController.tag);

module.exports = router