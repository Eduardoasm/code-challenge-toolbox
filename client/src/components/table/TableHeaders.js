import React from 'react';

export function TableHeaders({ headers }) {
  return (
    <thead style={{ borderBottomWidth: '3px', borderBottomColor: '#343a40', borderBottomStyle: 'solid' }}>
      <tr>
        {headers.map((header, index) => (
          <th scope="col" style={{ padding: '15px 10px' }} key={`${header}-${index}`}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
