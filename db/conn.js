const mysql = require('mysql');
const config = require('../config/db_config');

const pool = mysql.creatPool(config);

function query(sql, params) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        reject(err);
        return;
      }
    });

    conn.query(sql, params, (err, result) => {
      conn.release();
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

module.exports = query;
