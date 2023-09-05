import "./Table.css";

const Table = (props) => {
  const result = props.result.data;
  const round = props.round;
  const root = props.result.result;
  console.log(result);

  const keys = Object.keys(result[0]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {keys.map((item) => {
              return (
                <th scope="col" key={item}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {result.map((item, i) => {
            const values = Object.values(item);

            const rowColumns = values.map(
              (value, i) => {
                if (keys[i] === "error" && value === null) {
                  value = "----";
                  return (
                    <td data-label={keys[i]} key={i}>
                      {value}{" "}
                    </td>
                  );
                } else if (keys[i] === "error" && i !== 0) {
                  value = parseFloat((value * 100).toFixed(round)) + "%";
                  return (
                    <td data-label={keys[i]} key={i}>
                      {value}{" "}
                    </td>
                  );
                } else {
                  value = parseFloat(value.toFixed(round));
                  return (
                    <td data-label={keys[i]} key={i}>
                      {value}{" "}
                    </td>
                  );
                }
              } //
            );
            return <tr key={i}>{rowColumns}</tr>;
          })}
        </tbody>
      </table>
      <p className="m-guass-result">
        {" "}
        The Root is <b>{parseFloat(root.toFixed(round))}</b>
      </p>
    </div>
  );
};
export default Table;
