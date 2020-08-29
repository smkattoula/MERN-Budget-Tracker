const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");

const app = express();

// Bodyparser Middleware
app.use(express.json());

// Allow cross-origin access
app.use(cors());

// DB Config
const db = config.get("MONGO_URI");
