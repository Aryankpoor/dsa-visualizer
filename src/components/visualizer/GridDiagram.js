import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>DSA Visualizer</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/sorting">Sorting</Link>
        <Link to="/searching">Searching</Link>
      </div>
    </nav>
  );
}