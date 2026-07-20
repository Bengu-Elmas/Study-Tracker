function GoalSelector({
  formattedGoalMinutes,
  formattedGoalSeconds,
  setStudyGoal,
  studyTime,
  customGoal,
  setCustomGoal,
}) {
  return (
    <div className="goal">
      <p>
        Study Goal: {formattedGoalMinutes}:{formattedGoalSeconds}
      </p>

      <button onClick={() => setStudyGoal(studyTime + 10)}>10 seconds</button>

      <button onClick={() => setStudyGoal(studyTime + 20)}>20 seconds</button>

      <button onClick={() => setStudyGoal(studyTime + 30)}>30 seconds</button>

      <input
        type="number"
        placeholder="Enter custom goal..."
        value={customGoal}
        min={1}
        onChange={(e) => {
          setCustomGoal(e.target.value);
        }}
      />

      <button
        onClick={() => {
          if (Number(customGoal) > 0) {
            setStudyGoal(studyTime + Number(customGoal));
            setCustomGoal("");
          }
        }}
      >
        Set Goal
      </button>

      <button
        onClick={() => {
          setStudyGoal(0);
          setCustomGoal("");
        }}
      >
        Reset Goal
      </button>
    </div>
  );
}

export default GoalSelector;
