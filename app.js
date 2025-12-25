require("dotenv").config()
const express = require('express');
const app = express()
const db = require('./config/db')
db();
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use('/api',require('./routes/index'))
app.listen(process.env.PORT,()=>console.log(`your server run on ${process.env.PORT}`))