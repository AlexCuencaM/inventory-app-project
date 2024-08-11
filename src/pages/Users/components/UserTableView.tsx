import { Button, ButtonGroup } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'; 
import { User } from '../../../data/Entities/User';
import { useDialog } from '../../../hooks/useDialog';
const columns = (handleClickEdit: (id:number) => void, handleClickDelete: (id:number) => void) =>{
    return [
        { field: 'Identificacion', headerName: 'Identificacion', width: 150 },
        { field: 'Nombres', headerName: 'Nombres', width: 150 },
        { field: 'Apellidos', headerName: 'Apellidos', width: 150 },
        { field: 'Correo', headerName: 'Correo', width: 150 },
        { field: 'Username', headerName: 'Username', width: 150 },
        { field: 'Contraseña', headerName: 'Contraseña', width: 150 },
        { field: 'actions', headerName: 'Acciones', width: 250, 
            renderCell: (params: GridRenderCellParams) =>(<ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
            >
                <Button onClick={() => {
                    handleClickEdit(Number(params["id"]));
                }}>Edit</Button>
                <Button onClick={() => {
                    handleClickDelete(Number(params["id"]));
                    }}>Delete</Button>
            </ButtonGroup> ) },
      ];

} 
interface UserTableViewProps {
    rows: User[];
}
export const UserTableView = ({rows}: UserTableViewProps) => {
    const {handleClickOpen} = useDialog();
    const handleClickEdit = (id:number) => {
      handleClickOpen();
    }
    const handleClickDelete = (id:number) => {
        handleClickOpen();
      }

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns(handleClickEdit, handleClickDelete)} />
    </div>
  )
}
