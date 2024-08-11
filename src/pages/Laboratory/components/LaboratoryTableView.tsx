import { Box, Button, ButtonGroup, IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { Laboratory } from "../../../data/Entities/Laboratory";
import { useDialog } from "../../../hooks/useDialog";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useLaboratory } from "../../../hooks/useLaboratory";
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert";

const columns = (
  handleClickEdit: (id: number) => void,
  handleClickDelete: (id: number) => void
) => {
  return [
    { field: "nombre", headerName: "Nombres", width: 250 },
    { field: "telefono", headerName: "Telefono", width: 200 },
    { field: "direccion", headerName: "Direccion", width: 300 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 300,
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
interface LaboratoryTableViewProps {
  rows: Laboratory[];
  setStateForm: (value: Laboratory) => void;
}

export const LaboratoryTableView = ({
  rows,
  setStateForm,
}: LaboratoryTableViewProps) => {
  const { handleOpenEditDialog, handleOpenDeleteDialog } = useDialog();
  const { deleteAsync, getAsync } = useLaboratory();

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
