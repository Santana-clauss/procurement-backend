// filepath: /procurement-backend/models/vendorModel.js
const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  category: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  rating: { type: Number, default: 0 },
  paymentTerms: { type: String, required: true },
  contactPerson: { type: String, required: true },
  contactPersonPhone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;