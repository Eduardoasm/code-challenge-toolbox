import React from 'react';
import { fetchSecretFiles } from '../redux/actions-files';
import { useDispatch, useSelector } from 'react-redux'

export function FilesTable() {
  const dispatch = useDispatch();

  const secretFiles = useSelector(state => state.secretFiles)
  const transformData = (data) => {
  return data.flatMap(fileData =>
    fileData.lines.map(line => ({
      file: fileData.file,
      text: line.text,
      number: line.number,
      hex: line.hex
    }))
  );
};
  const transformedData = secretFiles?.length ? transformData(secretFiles) : []

  React.useEffect(()=> {
    if (!secretFiles?.length) {
      dispatch(fetchSecretFiles())
    }
  },[dispatch])

  const fileHeaders = ["File Name", "Text", "Number", "Hex"]

  return(
    <>
    {
      transformedData?.length
      ? 
      <div className="p-5 d-flex align-items-center justify-content-center">
        <table className="table table-striped w-75 table-bordered">
          <thead style={{ borderBottomWidth: '3px', borderBottomColor: '#343a40', borderBottomStyle: 'solid' }}>
            <tr>
              {
                fileHeaders.map((header, index) => (
                  <th scope="col" style={{ padding: '15px 10px' }} key={`${header}-${index}`}>{header}</th>
                ))
              }
            </tr>
          </thead>
          <tbody> 
            {
              transformedData.map((file) =>  (
                <tr key={file.text}>
                  <td>{file.file}</td>
                  <td>{file.text}</td>
                  <td>{file.number}</td>
                  <td>{file.hex}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      :
        <div className="p-5 d-flex align-items-center justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      }
    </>
  )
}

export default FilesTable;