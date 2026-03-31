import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  // 🔥 LOCK BODY SCROLL
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className="app">
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="toggle-btn"
      >
        {open ? "✖" : "☰"}
      </button>

      {/* OVERLAY */}
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