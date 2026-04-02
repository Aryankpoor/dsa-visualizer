export default function TreeView({ levels }) {
  return (
    <div className="tree-container">
      {levels.map((level, i) => (
        <div key={i} className="tree-level">
          {level.map((node, j) => (
            <div key={j} className="tree-node">
              {node}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}