const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Match the client-side address correctly
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Database Connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((error) => {
    console.error("Database Connection Failed:", error.message);
    process.exit(1); // Exit the process with failure code
  });

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
