const path = require("path")
const Workout = require("../models/Workout")
const router =  require("express").Router()

router.get("/exercise?", (req, res)=> {
    const id = req.query.id
    console.log("htmlId: ", id)
    res.sendFile(path.join(__dirname, "../public", "exercise.html"))
})

router.get("/exercise", (req, res) => {
    // console.log(res)
    res.sendFile(path.join(__dirname, "../public", "exercise.html"))
})

router.get("/stats", (req, res) => {
    // console.log(res)
    res.sendFile(path.join(__dirname, "../public", "stats.html"))
})

module.exports = router