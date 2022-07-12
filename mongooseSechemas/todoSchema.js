const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    age: Number,
    phone: String,
});

module.exports = new mongoose.model("user", todoSchema)