// import module
const mysql = require("mysql");
const dotenv = require("dotenv");

// init connection
const connection = mysql.createPool({
    host: process.env.FOLIO_HOST,
    user: process.env.FOLIO_USER,
    password: process.env.FOLIO_PASSWORD,
    database: process.env.FOLIO_DB,
});

// export
module.exports = connection;
