// import module
const express = require("express");
const router = express.Router();

// import routes
const contact = require("./contact");
const developper = require("./developper");
const infos = require("./infos");
const latest = require("./latest");
const project = require("./project");
const stack = require("./stack");
const team = require("./team");
const tool = require("./tool");

// init router
router.use("/contact", contact);
router.use("/developpers", developper);
router.use("/infos", infos);
router.use("/latest", latest);
router.use("/projects", project);
router.use("/stacks", stack);
router.use("/teams", team);
router.use("/tools", tool);

// export router
module.exports = router;
