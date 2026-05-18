const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({

    deviceName: String,

    architecture: String,

    status: String,

    processor: String,

    ram: String,

    storage: String

});

module.exports = mongoose.model("Device", DeviceSchema);