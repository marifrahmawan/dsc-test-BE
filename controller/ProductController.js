const Product = require('../models/ProductModel');

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    return res.status(200).json({ message: 'Success', data: products });
  } catch (error) {
    return res.status(500).json({ message: 'Something went Wrong. Try Again Later', error: error });
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    return res.status(200).json({ message: 'Success', data: product });
  } catch (error) {
    return res.status(500).json({ message: 'Something went Wrong. Try Again Later', error: error });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { productBrand, productType, stock, price, information } = req.body;

    const newProduct = new Product({
      productBrand,
      productType,
      stock,
      price,
      information,
    });

    const successAddProduct = await newProduct.save();

    return res.status(201).json({ message: 'Success Add Product', data: successAddProduct });
  } catch (error) {
    return res.status(500).json({ message: 'Something went Wrong. Try Again Later', error: error });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const updateProduct = await Product.findByIdAndUpdate(productId, { $set: { ...req.body } });

    return res.status(201).json({ message: 'Success', data: updateProduct });
  } catch (error) {
    return res.status(500).json({ message: 'Something went Wrong. Try Again Later', error: error });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;

    await Product.findByIdAndDelete(productId);

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went Wrong. Try Again Later', error: error });
  }
};
