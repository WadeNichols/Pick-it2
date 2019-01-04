const mongoose = require("mongoose")
const { Schema } = mongoose

const tabSchema = new Schema ({
    title: String,
    artist: String,
    link: String,
    songId: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("Tab", tabSchema)