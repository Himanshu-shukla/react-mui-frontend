import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from '../data';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'value', headerName: 'Value', width: 150 },
];

const DataTable = () => {
  return (
    <div>
      <h2>Data</h2>
      <div style={{ height: 300, width: 600 }}>
        <DataGrid rows={data} columns={columns} pageSize={5} />
      </div>
    </div>
  );
};

export default DataTable;
