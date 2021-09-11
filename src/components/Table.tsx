import { Dict, TableProps } from "../types";

const Table = ({ columns, data }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.name}>{column.description}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: Dict) => {
          // fix warnings
          return (
            <tr key={item.id}>
              {columns.map((column, index) => (
                <td key={index} width={column.width}>
                  {item[column.name]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
