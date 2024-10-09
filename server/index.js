const express = require("express");
const app = express();
const mongoose = require('mongoose')
const port = 3100;
const mongoDB = require('./db');
const cors = require('cors');
mongoDB();

app.use(cors({
  origin: ["https://6-teen-foods-backend.vercel.app", "http://localhost:3000"],
  methods: ["POST", "GET"],
  credentials: true
}));



// Middleware to parse JSON
app.use(express.json());

mongoose.connect('mongodb+srv://The6TEENFlavours:The6TEENFlavours@the6teenflavours.5zilf.mongodb.net/The6TEENFlavours?retryWrites=true&w=majority')

app.get('/', (req, res) => {
  res.json("Hello");
})

// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow more methods
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); // Handle pre-flight requests
  }
  next();
});

// Routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
// Simple test route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});