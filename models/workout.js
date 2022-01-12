const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: ()=> new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'input exercise',
      },
      name: {
        type: String,
        trim: true,
        required: 'name',
      },
      duration: {
        type: Number,
        required: 'add duration (minutes)'
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
})

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;