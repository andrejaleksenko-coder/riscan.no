const router = require("express").Router();
const homeController = require("../controllers/homeController");
const productsRoutes = require("./products");

router.get("/", homeController.home);
router.get("/health", homeController.health);

router.use("/products", productsRoutes);

module.exports = router;
