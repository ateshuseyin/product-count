const mysql = require('mysql');
const dbConfig = require('../../db-config.json');
const pool = mysql.createPool(dbConfig);
module.exports = pool;