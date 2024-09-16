// models/user.js

const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
  async create(username, password, email) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO user_admin (username, password_hash, email) VALUES ($1, $2, $3) RETURNING *',
      [username, hashedPassword, email]
    );
    return result.rows[0];
  },

  async findByUsername(username) {
    const result = await pool.query('SELECT * FROM user_admin WHERE username = $1', [username]);
    return result.rows[0];
  },
};

module.exports = User;
