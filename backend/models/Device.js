const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
    deviceName: String,
    architecture: String,
    processor: String,
    memory: String
});

module.exports = mongoose.model("Device", DeviceSchema);