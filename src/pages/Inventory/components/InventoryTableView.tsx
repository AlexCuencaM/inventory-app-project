import { Box, Button, ButtonGroup, IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { Inventory } from "../../../data/Entities/Inventory";
import { useDialog } from "../../../hooks/useDialog";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useInventory } from "../../../hooks/useInventory";

const columns = () => {
  return [
    { field: "producto", headerName: "Producto", width: 300 },
    { field: "tipoMovimiento", headerName: "Tipo de Movimiento", width: 300 },
    { field: "stockProducto", headerName: "Stock", width: 200 },
    {
      field: "cantidadMovimiento",
      headerName: "Cantidad Movimiento",
      width: 200,
    },
  ];
};
interface InventoryTableViewProps {
  rows: Inventory[];
  setStateForm: (value: Inventory) => void;
}

export const InventoryTableView = ({ rows }: InventoryTableViewProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "auto",
      }}
    >
      <div style={{ flex: 1, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns()}
          autoHeight
          sx={{ minHeight: 300 }}
        />
      </div>
    </Box>
  );
};
