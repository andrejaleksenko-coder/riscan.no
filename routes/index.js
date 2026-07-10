const router = require("express").Router();
const homeController = require("../controllers/homeController");
const productsRoutes = require("./products");

router.get("/", homeController.home);
router.get("/api/health", homeController.health);

router.use("/api/products", productsRoutes);

module.exports = router;
