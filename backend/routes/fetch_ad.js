const express = require("express");
const Ad = require("../models/ads"); 
const router = express.Router();

app.get("/api/ads", (req, res) => {
    const token = req.cookies.token;
  
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token" });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden - Invalid token" });
      }
  
      // Proceed to fetch ads if authenticated
      Ad.find()
        .then((ads) => res.json(ads))
        .catch((error) => {
          console.error("Error fetching ads:", error);
          res.status(500).json({ error: "Internal Server Error" });
        });
    });
  });
  
