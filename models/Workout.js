const { Schema, model } = require("mongoose")

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
            },
            name: {
                type: String,
                trim: true
            },
            duration: {
                type: Number,
                trim: true,
            },
            weight: {
                type: Number,
                trim: true,
            },
            reps: {
                type: Number,
                trim: true,
            },
            sets: {
                type: Number,
                trim: true,
            },
            distance: {
                type: Number,
                trim: true,
                min: 0,
            },
        }
    ],
})

const Workout = model("Workout", WorkoutSchema)

module.exports = Workout