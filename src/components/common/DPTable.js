export default function DPTable({ table, current }) {
  return (
    <table>
      <tbody>
        {table.map((row, i) => (
          <tr key={i}>
            {row.map((val, j) => {
              let className = "";

              if (current && i === current.i && j === current.j) {
                className = "active";
              }

              return (
                <td key={j} className={className}>
                  {val}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}