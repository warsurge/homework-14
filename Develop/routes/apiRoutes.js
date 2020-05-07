const Workout = require("../models/workout.js")

module.exports = function (app){
    app.get("/api/workouts", function (req,res){
        Workout.find().then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })
};

app.post("/api/workouts", function (req,res) {
    Workout.create({}).then(data =>
        res.json(data)).catch(err => {
            console.log(err)
            res.json(err)
        })
});

app.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,{
            $push: {exercises: body} },
            {new: true}
    ).then (data => res.json(data))
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})