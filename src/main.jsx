import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import TimerDisplay from "./components/TimerDisplay";
import GoalSelector from "./components/GoalSelector";
import SessionStats from "./components/SessionStats";
import TimerControls from "./components/TimerControls";

import "./style.css";
function App() {
  const [studyTime, setStudyTime] = useState(
    Number(localStorage.getItem("studyTime") || 0),
  );

  const [isRunning, setIsRunning] = useState(false);

  const [studyGoal, setStudyGoal] = useState(
    Number(localStorage.getItem("studyGoal") || 0),
  );

  const [completedSessions, setCompletedSessions] = useState(
    Number(localStorage.getItem("completedSessions") || 0),
  );

  const [customGoal, setCustomGoal] = useState("");

  // Formatted minutes & seconds for studyTime
  const minutes = Math.floor(studyTime / 60);
  const seconds = studyTime % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // Formatted minutes & seconds for studyGoal
  const goalMinutes = Math.floor(studyGoal / 60);
  const goalSeconds = studyGoal % 60;
  const formattedGoalMinutes = String(goalMinutes).padStart(2, "0");
  const formattedGoalSeconds = String(goalSeconds).padStart(2, "0");

  useEffect(() => {
    // Counts studyTime
    if (isRunning) {
      const timer = setInterval(() => {
        setStudyTime((previousTime) => previousTime + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isRunning]);

  useEffect(() => {
    // Completes the current study session
    if (isRunning && studyGoal > 0 && studyTime >= studyGoal) {
      setCompletedSessions((previousSessions) => previousSessions + 1);

      setIsRunning(false);
    }
  }, [studyTime, studyGoal, isRunning]);

  useEffect(() => {
    // Updates the browser tab title based on the current study status
    if (studyTime === 0 && !isRunning) {
      document.title = "Study Tracker";
    } else if (studyGoal > 0 && studyTime >= studyGoal) {
      document.title = "Session Completed!";
    } else if (isRunning) {
      document.title = "Studying " + formattedMinutes + ":" + formattedSeconds;
    } else {
      document.title = "Study Paused";
    }
  }, [studyTime, isRunning, studyGoal]);

  useEffect(() => {
    // Saves data when the page refreshes
    localStorage.setItem("studyTime", studyTime);
    localStorage.setItem("studyGoal", studyGoal);
    localStorage.setItem("completedSessions", completedSessions);
  }, [studyTime, studyGoal, completedSessions]);

  return (
    <div className="app">
      <h1>Study Tracker</h1>

      <TimerDisplay
        formattedMinutes={formattedMinutes}
        formattedSeconds={formattedSeconds}
      />

      <GoalSelector
        formattedGoalMinutes={formattedGoalMinutes}
        formattedGoalSeconds={formattedGoalSeconds}
        studyTime={studyTime}
        setStudyGoal={setStudyGoal}
        customGoal={customGoal}
        setCustomGoal={setCustomGoal}
      />

      <p className="status">
        {studyTime !== 0 &&
          (studyGoal > 0 && studyTime >= studyGoal
            ? "Session Completed ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧"
            : isRunning
              ? "✎ᝰStudying..."
              : "Paused ❚❚")}
      </p>

      <TimerControls
        studyGoal={studyGoal}
        studyTime={studyTime}
        setIsRunning={setIsRunning}
        setStudyTime={setStudyTime}
      />

      <SessionStats
        completedSessions={completedSessions}
        setCompletedSessions={setCompletedSessions}
      />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
