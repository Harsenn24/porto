const express = require("express");
const router = express.Router();
const { StoreController } = require("../controller");


router.get("/all-user", StoreController.get_user)

module.exports = router