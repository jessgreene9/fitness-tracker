const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ]).then((workouts) => {
    res.json(workouts);
  })
  .catch((err) => {
    console.error(err);
    res.json(err);
  });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body).then((workout) => {
    res.json(workout);
  })
  .catch((err) => {
    console.error(err);
    res.json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { id: req.params.id },
    { $push: { exercises: req.body } }
  ).then((workout) => {
    res.json(workout);
  })
  .catch((err) => {
    console.error(err);
    res.json(err);
  });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).then((workouts) => {
    res.json(workouts);
  })
  .catch((err) => {
    console.error(err);
    res.json(err);
  });
});

module.exports = router;
