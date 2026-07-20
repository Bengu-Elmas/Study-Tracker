function TimerControls({ studyGoal, studyTime, setIsRunning, setStudyTime }) {
  return (
    <div className="controls">
      <button
        onClick={() => setIsRunning(true)}
        disabled={studyGoal > 0 && studyTime >= studyGoal}
      >
        Start
      </button>

      <button onClick={() => setIsRunning(false)}>Pause</button>

      <button
        onClick={() => {
          setStudyTime(0);
          setIsRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default TimerControls;
