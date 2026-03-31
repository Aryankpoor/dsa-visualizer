export default function GraphMatrix({ graph, current }) {
  return (
    <table>
      <tbody>
        {graph.map((row, i) => (
          <tr key={i}>
            {row.map((val, j) => (
              <td key={j}>
                {val}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}