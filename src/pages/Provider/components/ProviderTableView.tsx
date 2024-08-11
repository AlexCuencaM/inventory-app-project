import { Box, Button, ButtonGroup, IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { Provider } from "../../../data/Entities/Provider";
import { useDialog } from "../../../hooks/useDialog";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useProvider } from "../../../hooks/useProvider";
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert";

const columns = (
  handleClickEdit: (id: number) => void,
  handleClickDelete: (id: number) => void
) => {
  return [
    { field: "nombre", headerName: "Nombres", width: 150 },
    { field: "telefono", headerName: "Telefono", width: 150 },
    { field: "direccion", headerName: "Direccion", width: 150 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 100,
      renderCell: (params: GridRenderCellParams) => (
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled button group"
        >
          <IconButton
            onClick={() => {
              handleClickEdit(Number(params["id"]));
            }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              handleClickDelete(Number(params["id"]));
            }}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
      ),
    },
  ];
};
interface ProviderTableViewProps {
  rows: Provider[];
  setStateForm: (value: Provider) => void;
}

export const ProviderTableView = ({
  rows,
  setStateForm,
}: ProviderTableViewProps) => {
  const { handleOpenEditDialog, handleOpenDeleteDialog } = useDialog();
  const { deleteAsync, getAsync } = useProvider();

  const handleClickEdit = (id: number) => {
    getAsync(id)
      .then((res) => {
        setStateForm(res);
        handleOpenEditDialog();
      })
      .catch((err) => {
        inventoryAlert(err.response?.data?.message ?? "Unexpected error");
      });
  };

  const handleClickDelete = (id: number) => {
    deleteAsync(id)
      .then((res) => {
        inventoryAlert(res);
      })
      .catch((err) => {
        inventoryAlert(err.response?.data?.message ?? "Unexpected error");
      })
      .finally(() => {
        handleOpenDeleteDialog();
      });
  };

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
          columns={columns(handleClickEdit, handleClickDelete)}
          autoHeight
          sx={{ minHeight: 300 }}
        />
      </div>
    </Box>
  );
};
