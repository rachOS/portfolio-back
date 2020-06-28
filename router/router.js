// import module
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

// import routes
const accueil = require("./home");

// init router
router.use("/accueil", accueil);

// export router
module.exports = router;
