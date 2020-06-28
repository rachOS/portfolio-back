// import modules
const express = require("express");
const app = express();
const router = require("./router/router");
const dotenv = require("dotenv");
const cors = require("cors");

// init parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init routing
app.use("/api", router);

// init port
const port = process.env.FOLIO_PORT || 3000;

// test
/* app.get("/api", (req, res) => {
    console.log("test");
}); */

// init server
app.listen(port, (err) => {
    if (err) {
        throw new Error(err);
    } else {
        console.log(`the server is listening on port ${port}`);
    }
});
