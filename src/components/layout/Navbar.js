import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#111" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/sorting/bubble">Bubble</Link> |{" "}
      <Link to="/sorting/selection">Selection</Link> |{" "}
      <Link to="/sorting/insertion">Insertion</Link> |{" "}
      <Link to="/searching/linear">Linear</Link> |{" "}
      <Link to="/searching/binary">Binary</Link> |{" "}
      <Link to="/dp/lcs">LCS</Link> |{" "}
      <Link to="/dp/knapsack">Knapsack</Link> |{" "}
      <Link to="/graph/bfs">BFS</Link> |{" "}
      <Link to="/graph/dfs">DFS</Link>
    </nav>
  );
}