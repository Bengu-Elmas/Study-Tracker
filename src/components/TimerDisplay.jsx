function TimerDisplay({ formattedMinutes, formattedSeconds }) {
  return (
    <p className="timer">
      Today's Study Time
      <br />
      {formattedMinutes}:{formattedSeconds}
    </p>
  );
}
export default TimerDisplay;
