const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("MongoDB Connection Error:", err);
});

app.get("/", (req, res) => {
    res.send("Graphene Device Architecture Backend Running");
});

app.get("/api/devices", (req, res) => {
    res.json([
        {
            deviceName: "Graphene Laptop",
            architecture: "ARM64",
            processor: "Apple M1",
            memory: "16GB"
        },
        {
            deviceName: "Graphene Server",
            architecture: "x86_64",
            processor: "Intel Xeon",
            memory: "64GB"
        }
    ]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});