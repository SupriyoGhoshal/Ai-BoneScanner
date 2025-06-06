require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5800;

app.use(cors());
app.use(bodyParser.json());

// Start server
app.listen(port, () =>
    console.log(`🚀 Server running on http://localhost:${port}/`)
);

// Connect to MongoDB
const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));
