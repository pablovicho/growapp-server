// 1. IMPORTACIONES
const mongoose= require("mongoose")

// 2.  SCHEMA
const moodSchema = mongoose.Schema({
    moodEntry: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        default: ""
    },
    date: {
        type: Date,
        required: true
    },
    userId: {
        type: String
    }
})

// 3. MODELO
const Mood = mongoose.model("Mood", moodSchema)

// 4. EXPORTACIÓN
module.exports = Mood