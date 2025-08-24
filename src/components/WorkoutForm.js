import React, { useState } from "react";

function WorkoutForm({ addWorkout }) {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise) return;
    addWorkout({ exercise, duration, reps, sets });
    setExercise("");
    setDuration("");
    setReps("");
    setSets("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Exercise (e.g. Pushups)"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (min)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
      />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default WorkoutForm;
