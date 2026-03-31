import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">{children}</div>
    </div>
  );
}