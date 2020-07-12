// import module
const express = require("express");
const router = express.Router();

// import routes
const developper = require("./developper");
const project = require("./project");
const stack = require("./stack");
const team = require("./team");

// init router
router.use("/developpers", developper);
router.use("/projects", project);
router.use("/stacks", stack);
router.use("/teams", team);

// export router
module.exports = router;
