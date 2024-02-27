const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  productBrand: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
