const { model } = require("mongoose")
const path = require("path")
const Workout = require("../models/Workout")
const router = require("express").Router()

// route to get the most recent wortkout stats and post on welcome page
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$Exercises.duration" },
                totalWeight: { $sum: "$Exercises.weight" }
            }
        }
    ]).then(dbWorkout => {
        res.json(dbWorkout)
    }).catch((err) => {
        res.json(err)
    })
})


module.exports = router