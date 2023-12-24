const express = require("express");
const cors= require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors({
    origion: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({
    limit: "64kb"
}));
app.use(express.urlencoded({
    extended: true,
    limit: "64kb"
}));
app.use(express.static("public"))

app.use(cookieParser());



module.exports = app;