const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { MONGO_URI } = require('./db/connect');
const productRoutes = require('./routes/products'); // ⬅️ NEW LINE

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Root route for testing
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// ✅ Use product routes
app.use('/api/products', productRoutes); // ⬅️ NEW LINE
