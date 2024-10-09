require('dotenv').config(); // Load environment variables
const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI; // Use the URI from .env

const mongoDB = async () => {
  try {
    // Await the connection without deprecated options
    await mongoose.connect(mongoURI);

    console.log("Connected to DB successfully");

    // Fetch the 'food_items' collection
    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();

    // Fetch the 'foodCategory' collection
    const foodCategoryData = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

    // Assign data globally
    global.food_items = fetched_data;
    global.foodCategory = foodCategoryData;

    console.log("Data fetched and assigned to global variables");
  } catch (error) {
    console.error("Error connecting to the database or fetching data:", error);
  }
};

module.exports = mongoDB;
