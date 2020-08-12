const express = require("express");
const router = express.Router();
// import "../public/img/givyoo.png"

router.get("/:idProject", async (req, res, next) => {
    const { idProject } = req.params;
    try {
        const file = `${__dirname}/../public/img/${idProject}.png`;
        await res.download(file, "givyoo.png");
    } catch (error) {
        console.error;
    }
});

module.exports = router;
