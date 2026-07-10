const router = require("express").Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.home);

router.get("/api/health", homeController.health);

module.exports = router;
