import React from "react";

function WorkoutList({ workouts }) {
  return (
    <div>
      <h2>📋 Workout Log</h2>
      {workouts.length === 0 ? (
        <p>No workouts yet. Add one above!</p>
      ) : (
        <ul>
          {workouts.map((w, index) => (
            <li key={index}>
              <strong>{w.exercise}</strong> — {w.duration} min, {w.reps} reps, {w.sets} sets
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WorkoutList;
