const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.mongoatlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("connection successfull.....");
}).catch((e) => {
    console.log("no connection");
});

