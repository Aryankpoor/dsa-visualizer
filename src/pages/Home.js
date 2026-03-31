import Card from "../components/common/Card";

export default function Home() {
  return (
    <div>
      <h1>DSA Visualizer</h1>

      <h2>Overview</h2>
      <Card>
        This platform is designed to help students and developers understand
        Data Structures and Algorithms in a structured and visual way.
        Instead of focusing on animations, this website emphasizes clarity
        using step-by-step table-based representations, making it easier to
        follow how algorithms evolve over time.
      </Card>

      <h2>What You Will Learn</h2>
      <Card>
        <ul>
          <li>How sorting algorithms rearrange data step-by-step</li>
          <li>How searching algorithms locate elements efficiently</li>
          <li>How dynamic programming builds solutions using tables</li>
          <li>How graph algorithms traverse nodes systematically</li>
        </ul>
      </Card>

      <h2>Categories Covered</h2>
      <Card>
        <ul>
          <li><strong>Sorting:</strong> Bubble, Selection, Insertion</li>
          <li><strong>Searching:</strong> Linear, Binary</li>
          <li><strong>Dynamic Programming:</strong> LCS, Knapsack</li>
          <li><strong>Graph:</strong> BFS, DFS</li>
        </ul>
      </Card>

      <h2>How to Use This Website</h2>
      <Card>
        Select any algorithm from the sidebar. Each page contains a detailed
        explanation, time and space complexity, pseudocode, and a step-by-step
        example. Use the "Start Example" button and navigate through each step
        to understand how the algorithm works internally.
      </Card>

      <h2>Why This Approach</h2>
      <Card>
        Many visualizers rely heavily on animations which can sometimes be
        distracting. This platform instead focuses on clarity and learning,
        using structured tables and explanations to help build strong
        conceptual understanding.
      </Card>
    </div>
  );
}