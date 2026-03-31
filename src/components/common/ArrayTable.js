export default function ArrayTable({ array }) {
  return (
    <table border="1" cellPadding="10">
      <tbody>
        <tr>
          {array.map((val, i) => (
            <td key={i}>{val}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}