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
    host: process.env.DOKKU_HOST,
    user: process.env.DOKKU_USER,
    password: process.env.DOKKU_PASSWORD,
    database: process.env.DOKKU_DATABASE,
});

// export
module.exports = connection;
