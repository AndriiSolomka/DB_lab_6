"use strict";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "7167",
  database: "db_labs",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;