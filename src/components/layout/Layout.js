import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false); 

  return (
    <div className="app">
      <button
        onClick={() => setOpen(!open)}
        className="toggle-btn"
      >
        {open ? "✖" : "☰"}
      </button>

      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <div className={open ? "sidebar-wrapper open" : "sidebar-wrapper"}>
        <Sidebar />
      </div>

      {/* MAIN */}
      <div className="main-content">{children}</div>
    </div>
  );
}