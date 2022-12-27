const express = require("express");
const router = express.Router();
const { StoreController } = require("../controller/register_login");
const { ProductController } = require("../controller/product");
const { authentif } = require("../middleware/authentif");
const { result_image } = require("../middleware/multer");


router.post("/register", StoreController.register_user)
router.put("/active-store", StoreController.active_user)
router.post("/login", StoreController.login_user)

router.use(authentif)

router.post("/product-create", result_image, ProductController.create_product)
router.get("/product-id", ProductController.id_product_image)
router.get("/product-image", ProductController.product_image)
router.get("/products-all", ProductController.get_product)






module.exports = router