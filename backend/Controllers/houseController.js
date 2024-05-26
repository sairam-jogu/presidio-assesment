const HouseModel = require("../Models/HouseModel");

const postHouse = async (req, res) => {
  try {
    const {
      place,
      area,
      imageUrl,
      numberOfBeds,
      numberOfBathrooms,
      price,
      description,
      hospitalsNearBy,
      schoolsNearBy,
    } = await req.body;
    const user = req.user._id;
    const house = await HouseModel({
      user,
      place,
      area,
      imageUrl,
      numberOfBeds,
      numberOfBathrooms,
      price,
      description,
      hospitalsNearBy,
      schoolsNearBy,
    });
    await house.save();
    res.status(200).json({ message: "Property added succesfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const house = await HouseModel.findById(id).populate(
      "user",
      "firstName lastName email"
    );
    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }
    res.status(200).json(house);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserHouses = async (req, res) => {
  try {
    const userId = req.user._id;
    const houses = await HouseModel.find({ user: userId });
    res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllHouses = async (req, res) => {
  try {
    const houses = await HouseModel.find().populate(
      "user",
      "firstName lastName email"
    );
    res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const house = await HouseModel.findById(id);
    if (!house) {
        return res.status(404).json({ message: "House not found" });
    }
    // const {
    //     place,
    //     area,
    //     imageUrl,
    //     numberOfBeds,
    //     numberOfBathrooms,
    //     price,
    //     description,
    //     hospitalsNearBy,
    //     schoolsNearBy,
    //   } = await req.body;
    
    const updatedHouse = await HouseModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedHouse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const house = await HouseModel.findById(id);
    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }
    await HouseModel.findByIdAndDelete(id);
    res.status(200).json({ message: "House deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postHouse,
  getHouse,
  getAllHouses,
  getUserHouses,
  updateHouse,
  deleteHouse
};
