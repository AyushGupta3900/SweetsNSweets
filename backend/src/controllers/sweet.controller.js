import Sweet from "../models/Sweet.js";

export const addSweet = async (req, res) => {
  try {
    const { name, category, price, quantity, description } = req.body;

    if (!name || !category || price == null || quantity == null) {
      return res.status(400).json({ message: "All required fields missing" });
    }

    const sweet = await Sweet.create({
      name,
      category,
      price,
      quantity,
      description,
      createdBy: req.user._id
    });

    res.status(201).json({
      success: true,
      sweet
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllSweets = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;

    const query = {
      name: { $regex: search, $options: "i" }
    };

    const sweets = await Sweet.find(query)
      .populate("createdBy", "name email")
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Sweet.countDocuments(query);

    res.status(200).json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      sweets
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getSweetById = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    res.status(200).json({ success: true, sweet });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    Object.assign(sweet, req.body);
    await sweet.save();

    res.status(200).json({ success: true, sweet });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    await sweet.deleteOne();

    res.status(200).json({ success: true, message: "Sweet deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
