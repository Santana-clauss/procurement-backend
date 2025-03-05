const Vendor = require('../models/vendorModel.js');

// Get all vendors
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new vendor
exports.createVendor = async (req, res) => {
  const { name, email, category, phone, address, paymentTerms, contactPerson, contactPersonPhone } = req.body;
  const newVendor = new Vendor({
    name,
    email,
    category,
    phone,
    address,
    paymentTerms,
    contactPerson,
    contactPersonPhone,
  });

  try {
    const savedVendor = await newVendor.save();
    res.status(201).json(savedVendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a vendor
exports.updateVendor = async (req, res) => {
  const { id } = req.params;
  const { name, email, category, phone, address, isActive, rating, paymentTerms, contactPerson, contactPersonPhone } = req.body;

  try {
    const vendor = await Vendor.findById(id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    vendor.name = name || vendor.name;
    vendor.email = email || vendor.email;
    vendor.category = category || vendor.category;
    vendor.phone = phone || vendor.phone;
    vendor.address = address || vendor.address;
    vendor.isActive = isActive !== undefined ? isActive : vendor.isActive;
    vendor.rating = rating !== undefined ? rating : vendor.rating;
    vendor.paymentTerms = paymentTerms || vendor.paymentTerms;
    vendor.contactPerson = contactPerson || vendor.contactPerson;
    vendor.contactPersonPhone = contactPersonPhone || vendor.contactPersonPhone;

    const updatedVendor = await vendor.save();
    res.json(updatedVendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a vendor
exports.deleteVendor = async (req, res) => {
  const { id } = req.params;

  try {
    const vendor = await Vendor.findById(id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    await vendor.deleteOne();
    res.json({ message: 'Vendor deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
