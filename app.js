const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to bill applicatio");
})
app.get("/pay", (req, res) => {
    res.send("You can continue only when yo make initial deposit")
})

app.listen(3200, () => {
    console.log("app listenng on port 3200")
})