import { Box, Button, ButtonGroup, IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { Client } from "../../../data/Entities/Client";
import { useDialog } from "../../../hooks/useDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useClient } from "../../../hooks/useClient";
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert";

const columns = (
  handleClickEdit: (id: number) => void,
  handleClickDelete: (id: number) => void
) => {
  return [
    { field: "identificacion", headerName: "Identificación", width: 100 },
    { field: "nombreCompleto", headerName: "Nombre Completo", width: 200 },
    { field: "razonSocial", headerName: "Razón Social", width: 100 },
    { field: "telefono", headerName: "Teléfono", width: 150 },
    { field: "direccion", headerName: "Dirección", width: 200 },
    { field: "correo", headerName: "Correo", width: 200 },
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

interface ClientTableViewProps {
  rows: Client[];
  setStateForm: (value: Client) => void;
}

export const ClientTableView = ({
  rows,
  setStateForm,
}: ClientTableViewProps) => {
  const { handleOpenEditDialog, handleOpenDeleteDialog } = useDialog();
  const { deleteAsync, getAsync } = useClient();

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
