const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoUrl = process.env.DB_URL || "mongodb://localhost:27017/orders";
mongoose.connect(mongoUrl).then(() => console.log("Connected to MongoDB"));

app.get('/orders', (req, res) => {
    res.json({ message: "Order system online", database: "Connected" });
});

app.listen(3000, () => console.log("Order service on port 3000"));