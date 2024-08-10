import { Button, ButtonGroup } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World', },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome'},
    { id: 3, col1: 'MUI', col2: 'is Amazing'},
    
  ];
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
    { field: 'actions', headerName: 'Acciones', width: 250, renderCell: (params: GridRenderCellParams<any, any>) =>( <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
    >
        <Button>Edit</Button>
        <Button>Delete</Button>
    </ButtonGroup>) },
  ];

export const UserTableView = () => {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}
