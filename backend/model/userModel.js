const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pin: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    }
}, { timestamp: true })

module.exports = mongoose.model("User", userSchema)