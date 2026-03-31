export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 15px",
        margin: "5px",
        cursor: "pointer",
        background: "#2a2a2a",
        color: "white",
        border: "1px solid #444",
        borderRadius: "5px",
      }}
    >
      {text}
    </button>
  );
}