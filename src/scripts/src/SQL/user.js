"use strict";

const userSQL = {
  createUser: `INSERT INTO user (first_name, last_name, email, phone_number, password, is_admin, description, age, gender, company) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,

  readUserList: `SELECT * FROM user`,
  readUserById: `SELECT * FROM user WHERE id = ?`,

  updateUserById: `UPDATE user 
                   SET first_name = ?, last_name = ?, email = ?, 
                       phone_number = ?, password = ?, 
                       is_admin = ?, description = ?, 
                       age = ?, gender = ?, company = ? 
                   WHERE id = ?`,

  deleteUserById: `DELETE FROM user WHERE id = ?`,
};

export default userSQL;
