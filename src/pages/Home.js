import Card from "../components/common/Card";

export default function Home() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
      
      {/* HERO SECTION */}
      <h1 style={{ marginBottom: "10px" }}>DSA Visualizer</h1>

      <p style={{ fontSize: "20px", color: "var(--text-secondary)" }}>
        Learn Data Structures and Algorithms through structured,
        step-by-step visual explanations.
      </p>

      {/* SEPARATOR */}
      <hr style={{ margin: "30px 0", borderColor: "var(--border)" }} />

      {/* OVERVIEW */}
      <h2>Overview</h2>
      <Card>
        This platform focuses on clarity rather than flashy animations.
        Each algorithm is broken down into steps using tables so you can
        understand exactly how values change over time.
      </Card>

      {/* FEATURES GRID */}
      <h2>What Makes This Different</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        <Card>
          Step-by-step execution instead of animations
        </Card>

        <Card>
          Clear pseudocode for every algorithm
        </Card>

        <Card>
          Covers multiple categories (Sorting, DP, Graph)
        </Card>

        <Card>
          Designed for learning, not just visualization
        </Card>
      </div>

      {/* TOPICS */}
      <h2 style={{ marginTop: "40px" }}>Topics Covered</h2>
      <Card>
        <ul style={{ textAlign: "left" }}>
          <li>Sorting Algorithms</li>
          <li>Searching Algorithms</li>
          <li>Dynamic Programming</li>
          <li>Graph Algorithms</li>
        </ul>
      </Card>

      {/* HOW TO USE */}
      <h2>How to Use</h2>
      <Card>
        Select an algorithm from the sidebar. Read the explanation,
        then use the "Start Example" button and step through the
        execution to understand how the algorithm works internally.
      </Card>

    </div>
  );
}