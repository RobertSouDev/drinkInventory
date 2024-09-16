const pool = require('../config/db');

const Action = {
  async create(item_id, action_type, quantity, user_admin_id, notes) {
    const result = await pool.query(
      'INSERT INTO inventory_action (item_id, action_type, quantity, user_admin_id, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [item_id, action_type, quantity, user_admin_id, notes]
    );
    return result.rows[0];
  },

  async findAll() {
    const result = await pool.query('SELECT * FROM inventory_action');
    return result.rows;
  },
};

module.exports = Action;
