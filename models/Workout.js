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
                // required: true,
            },
            name: {
                type: String,
                trim: true
            },
            duration: {
                type: Number,
                trim: true,
                // required: true,
            },
            weight: {
                type: Number,
                trim: true,
                // required: [
                //     function() { return this.type === "resistance"; },
                //     "Weight is required for resistance exercises."
                //   ]
            },
            reps: {
                type: Number,
                trim: true,
                // required: [
                //     function() { return this.type === "resistance"; },
                //     "Number of reps is required for resistance exercises."
                //   ]
            },
            sets: {
                type: Number,
                trim: true,
                // required: [
                //     function() { return this.type === "resistance"; },
                //     "Number of sets is required for resistance exercises."
                //   ]
            },
            distance: {
                type: Number,
                trim: true,
                // required: [
                //     function() { return this.type === "cardio"; },
                //     "Distance is required for cardio exercises, when not applicable enter 0."
                //   ]
            },
        }
    ],
})

const Workout = model("Workout", WorkoutSchema)

module.exports = Workout