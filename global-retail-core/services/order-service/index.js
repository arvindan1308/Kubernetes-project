// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// const mongoUrl = process.env.DB_URL || "mongodb://localhost:27017/orders";
// mongoose.connect(mongoUrl).then(() => console.log("Connected to MongoDB"));

// app.get('/orders', (req, res) => {
//     res.json({ message: "Order system online", database: "Connected" });
// });

// app.listen(3000, () => console.log("Order service on port 3000"));

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

// ----- MongoDB Connection -----
mongoose.connect(process.env.MONGO_URL || "mongodb://mongodb:27017/orders")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Serve static files (for images if needed)
app.use(express.static(__dirname + "/public"));

// UI Route
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Kubernetes Project</title>
        <style>
          body { background:#0f172a; color:white; text-align:center;
                 font-family:Arial; padding-top:60px; }
          img { width:350px; border-radius:12px; margin-top:20px; }
        </style>
      </head>
      <body>
        <h1>🚀 Welcome to My Kubernetes Project</h1>
        <h3>Running on Kubernetes + Argo CD + MongoDB</h3>
        <img src="https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png" />
      </body>
    </html>
  `);
});

app.listen(3000, () => console.log("Order Service Running on 3000"));
