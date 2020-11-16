// Require Mongoose
const mongoose = require('mongoose');

// Create a shortcut variable for Schema
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

// export the result of compiling our schema into a model
module.exports = mongoose.model('Carb', carbSchema);
