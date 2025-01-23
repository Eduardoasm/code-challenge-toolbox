import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchSecretFiles } from '../redux/actions-files';
import { TableHeaders } from './table/TableHeaders';
import { TableRows } from './table/TableRows';

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
          <TableHeaders headers={fileHeaders} />
          <TableRows data={transformedData} />
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