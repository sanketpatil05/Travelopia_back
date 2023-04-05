const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const USER=process.env.USER;
const PASSWORD=process.env.PASSWORD;
mongoose.set('strictQuery', false);
const connection = mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0.rttiys7.mongodb.net/brainhub`);

module.exports = { connection };