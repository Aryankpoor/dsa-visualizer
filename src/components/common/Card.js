export default function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #333",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "15px",
        background: "#1a1a1a",
      }}
    >
      {children}
    </div>
  );
}