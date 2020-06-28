// import module
const express = require("express");
const router = express.Router();

// init route
router.use("/", (req, res) => {
    res.json({ test: "contact route ok" });
});

// export router
module.exports = router;
