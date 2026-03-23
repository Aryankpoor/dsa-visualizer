import "../styles/global.css";

export default function Home() {
  return (
    <div className="page">

      <h1>DSA Algorithm Visualizer</h1>

      <p style={{ textAlign: "center", maxWidth: "700px", margin: "auto" }}>
        This project helps you understand algorithms through real-time
        visual animations. Instead of memorizing logic, you can actually
        see how algorithms work step by step.
      </p>

      <br />

      <h2>Features</h2>

      <ul style={{ maxWidth: "600px", margin: "auto" }}>
        <li>Real-time visualization</li>
        <li>Step-by-step execution</li>
        <li>Speed control</li>
        <li>Multiple algorithm categories</li>
      </ul>

    </div>
  );
}