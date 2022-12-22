const express = require("express");
const router = express.Router();
const { StoreController } = require("../controller");


router.post("/register", StoreController.register_user)
router.put("/active-store", StoreController.active_user)
router.post("/login", StoreController.login_user)



module.exports = router