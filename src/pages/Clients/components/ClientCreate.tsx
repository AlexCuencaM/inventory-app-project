import { Box, Button, TextField } from "@mui/material";
import { useDialog } from "../../../hooks/useDialog";
import { FormDialog } from "../../../ui/Dialog/FormDialog";
import { initialAppClient } from "../../../state/initialStates";
import { useForm } from "../../../hooks/useForm";
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert";
import { useState } from "react";
import { useClient } from "../../../hooks/useClient";

export const ClientCreate = () => {
  const { openCreateDialog, handleOpenCreateDialog, handleCloseCreateDialog } =
    useDialog();
  const { form, setForm, setStateForm } = useForm({ ...initialAppClient });
  const { postAsync } = useClient();
  const [clients, setClients] = useState<any[]>([]);

  const handleSubmit = () => {
    postAsync(form)
      .then((res) => {
        inventoryAlert(res);
        setStateForm({ ...initialAppClient });
        window.location.reload();
      })
      .catch((e) =>
        inventoryAlert(e.response?.data.message ?? "Unexpected error")
      );
  };

  return (
    <>
      <Box
        sx={{ marginBottom: 6, display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          onClick={handleOpenCreateDialog}
          variant="contained"
          size="small"
          sx={{
            fontSize: "0.75rem",
            padding: "4px 8px",
            width: "15%",
            height: 40,
          }}
        >
          Crear Cliente
        </Button>
      </Box>

      <FormDialog
        title="Crear Cliente"
        handleSubmit={handleSubmit}
        openDialog={openCreateDialog}
        handleDialog={handleCloseCreateDialog}
        maxWidth="sm"
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            variant="filled"
            fullWidth
            name="identificacion"
            label="Identificación"
            placeholder="ej: Identificación del Cliente"
            value={form.Identificacion}
            onChange={(e) => setForm(e.target.value, "Identificacion")}
          />
          <TextField
            variant="filled"
            fullWidth
            name="nombre"
            label="Nombre"
            placeholder="ej: Cliente123"
            required
            value={form.NombreCompleto}
            onChange={(e) => setForm(e.target.value, "NombreCompleto")}
          />
          <TextField
            variant="filled"
            fullWidth
            name="razonSocial"
            label="Razón Social"
            placeholder="ej: Razón Social del Cliente"
            required
            value={form.RazonSocial}
            onChange={(e) => setForm(e.target.value, "RazonSocial")}
          />
          <TextField
            variant="filled"
            fullWidth
            name="direccion"
            label="Dirección"
            placeholder="ej: Dirección del Cliente"
            required
            value={form.Direccion}
            onChange={(e) => setForm(e.target.value, "Direccion")}
          />
          <TextField
            variant="filled"
            fullWidth
            name="telefono"
            label="Teléfono"
            placeholder="ej: Teléfono del Cliente"
            required
            value={form.Telefono}
            onChange={(e) => setForm(e.target.value, "Telefono")}
          />
        </Box>
      </FormDialog>
    </>
  );
};
