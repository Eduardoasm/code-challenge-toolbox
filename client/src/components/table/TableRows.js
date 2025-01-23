import React from 'react';

export function TableRows({ data }) {
  return (
    <tbody>
      {data.map((file) => (
        <tr key={file.text}>
          <td>{file.file}</td>
          <td>{file.text}</td>
          <td>{file.number}</td>
          <td>{file.hex}</td>
        </tr>
      ))}
    </tbody>
  );
}
