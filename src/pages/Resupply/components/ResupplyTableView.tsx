import { Button, ButtonGroup } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useDialog } from "../../../hooks/useDialog";
import { Sales } from "../../../data/Entities/Sales";
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert";
import { useSales } from "../../../hooks/useSales";

const columns = (handleClickDetail: (id:number) => void) =>{
    return [
        { field: 'cliente', headerName: 'cliente', width: 300 },
        { field: 'fechaVenta', headerName: 'FechaVenta', width: 150 },
        { field: 'ivaPor', headerName: 'IvaPor', width: 150 },
        { field: 'iva', headerName: 'Iva', width: 150 },
        { field: 'subtotal', headerName: 'subtotal', width: 150 },
        { field: 'total', headerName: 'Total', width: 150 },
        { field: 'actions', headerName: 'Acciones', width: 250, 
            renderCell: (params: GridRenderCellParams) =>(<ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
            >
                <Button onClick={() => {
                    handleClickDetail(Number(params["id"]));
                }}>Detail</Button>
            </ButtonGroup> ) },
      ];
}

interface SalesTableViewProps {
    setStateForm: (value: Sales) => void;
}

export const ResupplyTableView = ({setStateForm}: SalesTableViewProps) => {
  const { handleCloseDetailDialog } = useDialog();
  const { sales, getAsync } = useSales()
  console.log(sales)
  const handleClickDetail = (id:number) => {
    getAsync(id).then((res) => {
        setStateForm(res);
        handleCloseDetailDialog();
    })
    .catch(err => {
        inventoryAlert(err.response?.data?.message ?? "Unexpected error")
    })
   }

  return (
    <div style={{ height: 300, width: '100%'}}>
      <DataGrid rows={sales} columns={columns(handleClickDetail)} />
    </div>
  )
}
