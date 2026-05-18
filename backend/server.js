require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;



mongoose.connect(MONGO_URI)
.then(() => {

    console.log("MongoDB Connected Successfully");

})
.catch((err) => {

    console.log("MongoDB Connection Error:", err);

});



app.get("/", (req, res) => {

    res.send("Graphene Backend Running Successfully");

});



app.get("/api/health", (req, res) => {

    res.status(200).json({

        status: "success",

        message: "Backend API Working",

        mongodb: "connected"

    });

});



app.get("/api/devices", async (req, res) => {

    try {

        const devices = [

            {
                id: 1,
                deviceName: "Graphene Laptop",
                architecture: "x64",
                status: "active"
            },

            {
                id: 2,
                deviceName: "Graphene Desktop",
                architecture: "ARM64",
                status: "active"
            }

        ];

        res.status(200).json(devices);

    } catch (error) {

        res.status(500).json({

            error: "Failed to fetch devices"

        });

    }

});



app.post("/api/devices", async (req, res) => {

    try {

        const newDevice = req.body;

        res.status(201).json({

            message: "Device Added Successfully",

            device: newDevice

        });

    } catch (error) {

        res.status(500).json({

            error: "Failed to add device"

        });

    }

});



app.use((req, res) => {

    res.status(404).json({

        error: "Route Not Found"

    });

});



app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});