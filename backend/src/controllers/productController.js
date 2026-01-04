import Product from "../models/productModel.js";

/* =========================
   CREATE PRODUCT (ADMIN)
   ========================= */
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      image,
      category,
      countInStock,
    } = req.body;

    if (!name || !description || !price || !image || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new Product({
      name,
      description,
      price,
      image,
      category,
      countInStock,
      createdBy: req.user._id,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   GET ALL PRODUCTS (PUBLIC)
   ========================= */
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   GET SINGLE PRODUCT
   ========================= */
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   UPDATE PRODUCT (ADMIN)
   ========================= */
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name ?? product.name;
    product.description = req.body.description ?? product.description;
    product.price = req.body.price ?? product.price;
    product.image = req.body.image ?? product.image;
    product.category = req.body.category ?? product.category;
    product.countInStock =
      req.body.countInStock ?? product.countInStock;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   DELETE PRODUCT (ADMIN)
   ========================= */
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();
    res.status(200).json({ message: "Product removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
