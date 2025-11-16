const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/signup");

const User = mongoose.model("User", {
  email: String,
  password: String,
});


app.post("/password", async (req, res) => {
  const { email, password } = req.body;
  try {
    await User.create({ email, password });
    res.send("Saved to database");
  } catch (err) {
    res.status(500).send("Error saving to database");
  }
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    if (user.password === password) {
      res.send("Login successful");
    } else {
      res.status(401).send("Incorrect password");
    }
  } catch (err) {
    res.status(500).send("Login failed");
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});