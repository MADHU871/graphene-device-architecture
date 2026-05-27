const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;



app.get("/", (req, res) => {

    res.send("Graphene Backend Running Successfully");

});



app.get("/api/devices", (req, res) => {

    res.json([

        {
            id: 1,
            deviceName: "Graphene Laptop",
            architecture: "x64",
            status: "active"
        }

    ]);

});



app.listen(PORT, "0.0.0.0", () => {

    console.log(`Server running on port ${PORT}`);

});