function SessionStats({ completedSessions, setCompletedSessions }) {
  return (
    <div className="sessions">
      <p>Completed Sessions: {completedSessions}</p>

      <button onClick={() => setCompletedSessions(0)}>Reset Sessions</button>
    </div>
  );
}
export default SessionStats;
