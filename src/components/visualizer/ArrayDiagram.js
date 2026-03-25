import { motion } from "framer-motion";
import "../styles/visualizer.css";

export default function ArrayVisualizer({ array, active }) {
  return (
    <div className="visualizer">
      {array.map((val, i) => (
        <motion.div
          key={i}
          className={`bar ${active.includes(i) ? "active" : ""}`}
          animate={{ height: val * 3 }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
}