import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#111" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/sorting">Sorting</Link>
      <Link to="/sorting/bubble">Bubble</Link>
      <Link to="/sorting/selection">Selection</Link>
      <Link to="/sorting/insertion">Insertion</Link>
    </nav>
  );
}