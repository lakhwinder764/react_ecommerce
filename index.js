const express = require("express");
const cors = requie("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const apiData = require("./data.json");
app.get("/", (req, res) => {
    res.send("hello!!!");
})
app.get("/service", (req, res) => {
    res.send(apiData);
})
app.listen(port, () => {
  console.log("hello again!!!!");  
})