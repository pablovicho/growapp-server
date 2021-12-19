// 1. IMPORTACIONES
const mongoose = require("mongoose")

// SCHEMA
const UserSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    terapeuta: {
        type: Boolean,
        default: false
    }
})

// MODELO
const User = mongoose.model("User", UserSchema)
// EXPORTACIÓN
module.exports = User