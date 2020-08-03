// import module
const mysql = require("mysql");
const dotenv = require("dotenv");
require("dotenv").config();

// init connection
const result = dotenv.config();
if (result.error) {
    throw result.error;
}

const connection = mysql.createPool({
    host: process.env.DOKKU_HOST,
    user: process.env.DOKKU_USER,
    password: process.env.DOKKU_PASSWORD,
    database: process.env.DOKKU_DATABASE,
});

// check connection
connection.getConnection((err, connect) => {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    connect.release();
    console.log("connected as id" + connect.threadId);
});

// check errors
connection.on("error", (err) => {
    if (err) throw new err();
});

// pool event
connection.on("release", (connect) => {
    console.log("connection %d released", connect.threadId);
});

/* connection.end((err) => {
    if (err) throw new err();
}); */

// export
module.exports = connection;
