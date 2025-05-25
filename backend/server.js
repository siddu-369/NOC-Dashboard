const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors());
app.use(bodyParser.json());

// Login Route
app.post("/api/login", async (req, res) => {
  const { userId, password } = req.body;

  if (userId !== process.env.USER_ID) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, process.env.HASHED_PASSWORD);
  if (!isMatch) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ success: true, message: "Login successful", token });
});

// Protected route example
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({
    success: true,
    message: `Hello ${req.user.userId}, this is protected.`,
  });
});

// JWT Verification Middleware
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
