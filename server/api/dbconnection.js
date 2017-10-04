const mysql = require('mysql');
const dbConfig = require('../../db-config.json');
const connection = mysql.createPool(dbConfig);
module.exports = connection;