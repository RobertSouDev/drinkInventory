// routes/api.js

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Item = require('../models/item');
const Action = require('../models/action');

// Endpoint para adicionar um novo usuário
router.post('/users', async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const newUser = await User.create(username, password, email);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para adicionar um novo item
router.post('/items', async (req, res) => {
  const { name, quantity, unit, expiration_date } = req.body;
  try {
    const newItem = await Item.create(name, quantity, unit, expiration_date);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para atualizar a quantidade de um item
router.put('/items/:id/quantity', async (req, res) => {
  const id = parseInt(req.params.id);
  const { quantity } = req.body;
  try {
    const updatedItem = await Item.updateQuantity(id, quantity);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para adicionar uma nova ação
router.post('/actions', async (req, res) => {
  const { item_id, action_type, quantity, user_admin_id, notes } = req.body;
  try {
    const newAction = await Action.create(item_id, action_type, quantity, user_admin_id, notes);
    res.status(201).json(newAction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
