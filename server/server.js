const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.use(express.static("src"));

app.get("/", (req,res)=>{
    const index = path.join(__dirname, '/../index.html');
    res.sendFile(index);
});

module.exports = app;