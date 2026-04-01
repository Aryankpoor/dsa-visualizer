import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      // 🔥 FORCE RESET AFTER RENDER
      setTimeout(() => {
        if (sidebarRef.current) {
          sidebarRef.current.scrollTop = 0;
        }
      }, 0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className="app">
      {/* TOGGLE */}
      <button
        onClick={() => setOpen(!open)}
        className="toggle-btn"
      >
        {open ? "✖" : "☰"}
      </button>

      {/* OVERLAY */}
      {open && (
        <div className="overlay" onClick={() => setOpen(false)}></div>
      )}

      {/* SIDEBAR */}
      <div className={`sidebar-wrapper ${open ? "open" : ""}`}>
        <div ref={sidebarRef} className="sidebar">
          <Sidebar />
        </div>
      </div>

      {/* MAIN */}
      <div className="main-content">{children}</div>
    </div>
  );
}