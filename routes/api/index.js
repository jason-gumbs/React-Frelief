const router = require("express").Router();
const resourceRoutes = require("./resource");

// Book routes
router.use("/resource", resourceRoutes);

module.exports = router;
