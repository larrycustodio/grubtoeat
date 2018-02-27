const express = require("express");
const app = express();
const path = require("path");

app.use("/public", express.static(__dirname + "/../public"));
app.use("/assets", express.static(__dirname + "/../dist"));

app.get("/*", (req,res)=>{
    const index = path.join(__dirname, '/../index.html');
    res.sendFile(index);
});

module.exports = app;