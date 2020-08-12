const express = require("express");
const router = express.Router();

router.get("/download", (req, res) => {
    const file = `${__dirname}/../static/text_files/Grégory_Chamekh_DéveloppeurWebFullstack-junior-v10b.pdf`;
    res.download(file,"cv.pdf");
});

module.exports = router;
