const { Schema, model } = require("mongoose")

const ExerciseSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: "You must give the name of your exercise",
        trim: true
    },
    duration: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: [
            function() { return this.type === "resistance"; },
            "Weight is required for resistance exercises."
          ]
    },
    reps: {
        type: Number,
        required: [
            function() { return this.type === "resistance"; },
            "Number of reps is required for resistance exercises."
          ]
    },
    sets: {
        type: Number,
        required: [
            function() { return this.type === "resistance"; },
            "Number of sets is required for resistance exercises."
          ]
    },
    distance: {
        type: Number,
        required: [
            function() { return this.type === "cardio"; },
            "Distance is required for cardio exercises, when not applicable enter 0."
          ]
    },
})

const Exercise = model("Exercise", ExerciseSchema)

module.exports = Exercise