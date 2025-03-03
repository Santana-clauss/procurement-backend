// filepath: /procurement-backend/models/requestModel.js
const mongoose = require('mongoose');

const requestItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
});

const requestSchema = new mongoose.Schema({
  requestorName: { type: String, required: true },
  department: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  dateCreated: { type: Date, default: Date.now },
  items: [requestItemSchema],
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;