import Sweet from "../models/Sweet.js";

export const addSweet = async (req, res) => {
  try {
    const { name, category, price, quantity } = req.body;

    if (!name || !category || price == null || quantity == null) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const sweet = await Sweet.create({
      name,
      category,
      price,
      quantity,
      createdBy: req.user._id
    });

    res.status(201).json({ success: true, sweet });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "Sweet already exists or invalid data" });
  }
};

export const getAllSweets = async (req, res) => {
  const sweets = await Sweet.find({ quantity: { $gt: 0 } });
  res.status(200).json({ success: true, sweets });
};

export const searchSweets = async (req, res) => {
  const { name, category, minPrice, maxPrice } = req.query;

  const filter = {};

  if (name) filter.name = { $regex: name, $options: "i" };
  if (category) filter.category = category;
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }

  const sweets = await Sweet.find(filter);
  res.status(200).json({ success: true, sweets });
};

export const updateSweet = async (req, res) => {
  const sweet = await Sweet.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!sweet) {
    return res.status(404).json({ message: "Sweet not found" });
  }

  res.status(200).json({ success: true, sweet });
};

export const deleteSweet = async (req, res) => {
  const sweet = await Sweet.findById(req.params.id);

  if (!sweet) {
    return res.status(404).json({ message: "Sweet not found" });
  }

  await sweet.deleteOne();
  res.status(200).json({ success: true, message: "Sweet deleted" });
};

export const purchaseSweet = async (req, res) => {
  const { quantity } = req.body;

  if (!quantity || quantity <= 0) {
    return res.status(400).json({ message: "Invalid quantity" });
  }

  const sweet = await Sweet.findById(req.params.id);

  if (!sweet) {
    return res.status(404).json({ message: "Sweet not found" });
  }

  if (sweet.quantity < quantity) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  sweet.quantity -= quantity;
  await sweet.save();

  res.status(200).json({
    success: true,
    message: "Purchase successful",
    remainingStock: sweet.quantity
  });
};

export const restockSweet = async (req, res) => {
  const { quantity } = req.body;

  if (!quantity || quantity <= 0) {
    return res.status(400).json({ message: "Invalid quantity" });
  }

  const sweet = await Sweet.findById(req.params.id);

  if (!sweet) {
    return res.status(404).json({ message: "Sweet not found" });
  }

  sweet.quantity += quantity;
  await sweet.save();

  res.status(200).json({
    success: true,
    message: "Restock successful",
    totalStock: sweet.quantity
  });
};
