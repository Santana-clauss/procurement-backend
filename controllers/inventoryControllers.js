
const Inventory = require('../models/inventoryModel.js');

exports.getAllInventoryItems = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createInventoryItem = async (req, res) => {
  const { name, category, quantity, unit, minStockLevel } = req.body;
  const newItem = new Inventory({
    name,
    category,
    quantity,
    unit,
    minStockLevel,
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add more CRUD operations as needed