// import module
const express = require("express");
const router = express.Router();

// import routes
const accueil = require("./home");
const portfolio = require("./portfolio");
const details = require("./infos");
const contact = require("./contact");
const admin = require("./admin");
const project = require("./project");

// init router
router.use("/accueil", accueil);
router.use("/portfolio", portfolio);
router.use("/details", details);
router.use("/contact", contact);
router.use("/admin", admin);
router.use("/projects", project);

// export router
module.exports = router;
