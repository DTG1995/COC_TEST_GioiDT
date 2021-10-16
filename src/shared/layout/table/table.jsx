import React from 'react';

import './table-data.less';

export const TableData = (props) => {
  const { columns, dataSource, fieldKey = 'id' } = props;

  return (
    <table className="app-table">
      <thead>
        <tr>
          {(columns || []).map((item) => (
            <th key={item.key}>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(dataSource || []).map((record, recordIndex) => (
          <tr key={record[fieldKey]}>
            {(columns || []).map((item) => (
              <td key={item.key}>
                <span className="content-cell">
                  {item.render ? item.render(record[item.dataIndex], recordIndex) : record[item.dataIndex]}
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
