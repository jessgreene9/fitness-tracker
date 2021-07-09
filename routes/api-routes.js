const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then((workouts) => {
    res.json(workouts);
  });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body).then((workout) => {
    res.json(workout);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { id: req.params.id },
    { $push: { exercises: req.body } }
  ).then((workout) => {
    res.json(workout);
  });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).then((workouts) => {
    res.json(workouts);
  });
});

module.exports = router;
