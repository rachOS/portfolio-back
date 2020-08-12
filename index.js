// import modules
const express = require("express");
const app = express();
const router = require("./router/router");
const dotenv = require("dotenv");
const cors = require("cors");

// Cors
app.use(cors());

try {
    app.use(function (req, res, next) {
        res.set("Access-Control-Allow-Origin", "*");
        res.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        res.set(
            "Access-Control-Allow-Headers",
            "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Accept, Authorization"
        );
        next();
    });
} catch (error) {
    console.error(error);
}

app.use("/img", express.static(__dirname + "public"));
console.log("DIR", __dirname);

// init parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init routing
app.use("/api", router);

// init port
const port = process.env.PORT || 8080;

// init server
app.listen(port, (err) => {
    if (err) {
        throw new Error(err);
    } else {
        console.log(`the server is listening on port ${port}`);
    }
});
