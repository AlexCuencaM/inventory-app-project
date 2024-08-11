import { Button, ButtonGroup } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'; 
import { Product } from '../../../data/Entities/Product';
import { useDialog } from '../../../hooks/useDialog';


const columns = (handleClickEdit: (id:number) => void, handleClickDelete: (id:number) => void) =>{
    return [
        { field: 'Nombre', headerName: 'Nombres', width: 150 },
        { field: 'Descripcion', headerName: 'Descripcion', width: 150 },
        { field: 'Laboratorio', headerName: 'Laboratorio', width: 150 },
        { field: 'Stock', headerName: 'Stock', width: 150 },
        { field: 'PrecioCompra', headerName: 'PrecioCompra', width: 150 },
        { field: 'PrecioVenta', headerName: 'PrecioVenta', width: 150 },
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

interface ProductTableViewProps {
    rows: Product[];
}

export const ProductTableView = ({rows}: ProductTableViewProps) => {
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
