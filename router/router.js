// import module
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

// import routes
const accueil = require("./home");
const portfolio = require("./portfolio");
const details = require("./infos");
const contact = require("./contact");
const admin = require("./admin");

// init router
router.use("/accueil", accueil);
router.use("/portfolio", portfolio);
router.use("/details", details);
router.use("/contact", contact);
router.use("/admin", admin);

// export router
module.exports = router;
