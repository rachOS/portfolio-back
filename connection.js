// import module
const mysql = require("mysql");
const dotenv = require('dotenv')
require('dotenv').config()

// init connection
const result =  dotenv.config()
if(result.error){
    throw result.error
}

const connection = mysql.createConnection({
    host: process.env.FOLIO_HOST,
    user: process.env.FOLIO_USER,
    password: process.env.FOLIO_PASSWORD,
    database: process.env.FOLIO_DB,
});

// export
module.exports = connection;
