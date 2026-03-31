import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>DSA Visualizer</h2>

      <h3>General</h3>
      <Link to="/">Home</Link>

      <h3>Sorting</h3>
      <Link to="/sorting/bubble">Bubble</Link>
      <Link to="/sorting/selection">Selection</Link>
      <Link to="/sorting/insertion">Insertion</Link>

      <h3>Searching</h3>
      <Link to="/searching/linear">Linear</Link>
      <Link to="/searching/binary">Binary</Link>

      <h3>Dynamic Programming</h3>
      <Link to="/dp/lcs">LCS</Link>
      <Link to="/dp/knapsack">Knapsack</Link>

      <h3>Graph</h3>
      <Link to="/graph/bfs">BFS</Link>
      <Link to="/graph/dfs">DFS</Link>
    </div>
  );
}