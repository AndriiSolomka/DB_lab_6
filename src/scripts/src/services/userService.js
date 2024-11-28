"use strict";


import userSQL from "../SQL/user.js";
import connectToDatabase from "../conectionDataBase/connectingDb.js";

class UserService {
  async #executeQuery(query, params = []) {
    const connection = await connectToDatabase();

    try {
      return await connection.execute(query, params);
    } catch (err) {
      throw new Error(`Database query failed: ${err.message}`);
    } finally {
      connection.release();
    }
  }

  #validateUserData(user) {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      password,
      is_admin = 0,
      description = null,
      age = null,
      gender = null,
      company = null,
    } = user;

    return {
      first_name,
      last_name,
      email,
      phone_number,
      password,
      is_admin,
      description,
      age,
      gender,
      company,
    };
  }

  async create(user) {
    const validatedUser = this.#validateUserData(user);
    const query = userSQL.createUser;

    const [result] = await this.#executeQuery(query, [
      validatedUser.first_name,
      validatedUser.last_name,
      validatedUser.email,
      validatedUser.phone_number,
      validatedUser.password,
      validatedUser.is_admin,
      validatedUser.description,
      validatedUser.age,
      validatedUser.gender,
      validatedUser.company,
    ]);

    return { id: result.insertId, message: "User created successfully" };
  }

  async getAll() {
    const query = userSQL.readUserList;
    const [users] = await this.#executeQuery(query);
    return users;
  }

  async getById(id) {
    const query = userSQL.readUserById;
    const [user] = await this.#executeQuery(query, [id]);

    if (!user || user.length === 0) {
      throw new Error(`User with ID ${id} not found`);
    }

    return user[0];
  }

  async update(id, user) {
    const validatedUser = this.#validateUserData(user);
    const query = userSQL.updateUserById;

    const [result] = await this.#executeQuery(query, [
      validatedUser.first_name,
      validatedUser.last_name,
      validatedUser.email,
      validatedUser.phone_number,
      validatedUser.password,
      validatedUser.is_admin,
      validatedUser.description,
      validatedUser.age,
      validatedUser.gender,
      validatedUser.company,
      id,
    ]);

    if (result.affectedRows === 0) {
      throw new Error(`User with ID ${id} not found`);
    }

    return { message: "User updated successfully" };
  }

  async delete(id) {
    const query = userSQL.deleteUserById;
    const [result] = await this.#executeQuery(query, [id]);

    if (result.affectedRows === 0) {
      throw new Error(`User with ID ${id} not found`);
    }

    return { message: "User deleted successfully" };
  }
}

export default new UserService();
