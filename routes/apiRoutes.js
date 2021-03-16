const mongoose = require("mongoose")
const path = require("path")
const db = require("../models")
const router = require("express").Router()

// route to get the most recent wortkout stats and post on welcome page
router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                },
            }
        }
    ]).then(dbWorkout => {
        res.json(dbWorkout)
    }).catch((err) => {
        res.json(err)
    })
})

router.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id
    const exercise =  req.body
    console.log("updateExercise: ", exercise)
    console.log(id)
    db.Workout.findByIdAndUpdate({_id: id}, {$push: { exercises: exercise }}, {new: true})
    .then(dbWorkout => {
        console.log("dbWorkout", dbWorkout)
        res.json(dbWorkout)
    })
    .catch((err) => {
        res.json(err)
    })
    
})

router.post("/api/workouts", (req, res) => {
    const exercise =  req.body
    console.log("apiCreateWorkout: ", req.body)
    db.Workout.create(exercise).then(dbWorkout => {
        res.json(dbWorkout)
    }).catch((err) => {
        res.json(err)
    })
    
})

router.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                },
            }
        }
    ]).then(dbWorkout => {
        res.json(dbWorkout)
    }).catch((err) => {
        res.json(err)
    })
})


module.exports = router