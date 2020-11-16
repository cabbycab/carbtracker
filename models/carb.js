const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create a carbSchema
const carbSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    mealTime: {
        type: String,
        required: true
    },
    bloodSugar: {
        type: Number,
        required: true
    },
    carbs: {
        type: Number,
        required: true
    },
    unitsTaken: {
        type: Number,
        required: true
    },
}, { timestamps: true });


module.exports = mongoose.model('Carb', carbSchema);
