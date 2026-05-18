const router = require("express").Router();
const Device = require("../models/Device");

router.post("/", async (req, res) => {
    const device = new Device(req.body);
    await device.save();
    res.json(device);
});

router.get("/", async (req, res) => {
    const devices = await Device.find();
    res.json(devices);
});

module.exports = router;