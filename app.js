const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
require("./DataBase/database");
require("dotenv").config();
const router = require("./Routers/router")

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors())
app.use(router)
app.listen(port, "127.0.0.1", () => {
    console.log(`server running at port ${port}`);
})
