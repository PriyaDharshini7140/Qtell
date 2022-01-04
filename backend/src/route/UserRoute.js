const express = require("express");
const router = express.Router()

const UserController = require("../controllers/UserController");



router.post('/login',UserController.login);

router.post('/refresh_token',UserController.refresh_token);

module.exports = router