const pool = require('../config/db');

const Item = {
  async create(name, quantity, unit, expiration_date) {
    const result = await pool.query(
      'INSERT INTO item_inventory (name, quantity, unit, expiration_date) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, quantity, unit, expiration_date]
    );
    return result.rows[0];
  },

  async updateQuantity(id, quantity) {
    const result = await pool.query(
      'UPDATE item_inventory SET quantity = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [quantity, id]
    );
    return result.rows[0];
  },

  async findAll() {
    const result = await pool.query('SELECT * FROM item_inventory');
    return result.rows;
  },
};

module.exports = Item;
