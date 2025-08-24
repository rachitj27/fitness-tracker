import React, { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";


function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏋️ Fitness Tracker</h1>
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} />
    </div>
  );
}

export default App;
