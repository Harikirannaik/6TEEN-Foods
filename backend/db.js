const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://The6TEENFlavours:The6TEENFlavours@the6teenflavours.5zilf.mongodb.net/The6TEENFlavours?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    // Just await the connection without deprecated options
    await mongoose.connect(mongoURI);

    console.log("Connected to DB successfully");

    // Fetch the 'food_items' collection
    const fetched_data = await mongoose.connection.db.collection("food_items");

    // Fetch all documents and log them
    const data = await fetched_data.find({}).toArray();
    if (data.length === 0) {
      console.log("No data found in the collection");
    } else {
      // console.log("Data:", data);
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = mongoDB;
