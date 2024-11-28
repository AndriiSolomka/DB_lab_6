"use strict";
import pool from "./pool.js";

const connectToDatabase = async () => {
  try {
    const connection = await pool.getConnection(); // Получаем соединение из пула
    console.log("Connection successfully from pool!");
    return connection;
  } catch (err) {
    console.error("Error Connection:", err.message);
    throw err;
  }
};

export default connectToDatabase;
