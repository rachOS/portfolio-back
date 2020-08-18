const express = require("express");
const router = express.Router();

router.get("/:idProject", async (req, res, next) => {
    try {
        const { idProject } = req.params;
        const file = `${__dirname}/../public/logos/${idProject}.png`;
        await res.download(file, "logo.png");
    } catch (error) {
        console.error;
    }
});

module.exports = router;
