// File: app.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const app = express();

// Database connection
mongoose.connect('mongodb://localhost/school_jobs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const Job = require('./models/Job');
const Application = require('./models/Application');