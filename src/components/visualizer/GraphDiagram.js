import "../styles/controls.css";

export default function Controls({ run, reset, speed, setSpeed }) {
  return (
    <div className="controls">

      <button onClick={run}>Play</button>
      <button onClick={reset}>Reset</button>

      <label>Speed</label>
      <input
        type="range"
        min="50"
        max="500"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      />

    </div>
  );
}