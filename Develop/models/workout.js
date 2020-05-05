const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workout = newSchema({
day: {
    type:Date,
    default: () => new Date()
},
exercises: [{
    type: {
        type: String,
        trim: true,
        required: "Enter an excercise type"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter an excercise name"
    },
    duration: {
        type: Number,
        required: "Enter a duration time"
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }
}]
},
{
    toJSON: {
        virtuals: true
    }
});

workout.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, excercise) => {
        return total + excercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workout);

module.exports = Workout