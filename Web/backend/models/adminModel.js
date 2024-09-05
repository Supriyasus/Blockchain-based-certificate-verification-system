const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  adminId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { collection: 'admins' }); // Ensure it matches your MongoDB collection

module.exports = mongoose.model('Admin', adminSchema);
