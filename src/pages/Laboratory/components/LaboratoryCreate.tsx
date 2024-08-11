import { Box, Button, TextField } from "@mui/material";
import { useDialog } from "../../../hooks/useDialog";
import { FormDialog } from "../../../ui/Dialog/FormDialog";
import { initialAppLaboratory } from "../../../state/initialStates";
import { useForm } from "../../../hooks/useForm";

import { inventoryAlert } from "../../../ui/Alert/InventoryAlert";
import { useState } from "react";
import { useLaboratory } from "../../../hooks/useLaboratory";

export const LaboratoryCreate = () => {
  const { openCreateDialog, handleOpenCreateDialog, handleCloseCreateDialog } =
    useDialog();
  const { form, setForm, setStateForm } = useForm({ ...initialAppLaboratory });
  const { postAsync } = useLaboratory();
  const [laboratories, setLaboratories] = useState<any[]>([]);

  const handleSubmit = () => {
    postAsync(form)
      .then((res) => {
        inventoryAlert(res);
        setStateForm({ ...initialAppLaboratory });
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
          Crear Laboratorio
        </Button>
      </Box>

      <FormDialog
        title="Crear Laboratorio"
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
            label="Identificacion"
            placeholder="ej: Identificacion del Laboratorio"
            value={form.NombreCompleto}
            onChange={(e) => setForm(e.target.value, "Identificacion")}
          />
          <TextField
            variant="filled"
            fullWidth
            name="nombre"
            label="Nombre"
            placeholder="ej: Laboratorio123"
            required
            value={form.NombreCompleto}
            onChange={(e) => setForm(e.target.value, "NombreCompleto")}
          />
          <TextField
            variant="filled"
            fullWidth
            name="direccion"
            label="Dirección"
            placeholder="ej: Dirección del Laboratorio"
            required
            value={form.Direccion}
            onChange={(e) => setForm(e.target.value, "Direccion")}
          />
          <TextField
            variant="filled"
            fullWidth
            name="telefono"
            label="Telefono"
            placeholder="ej: Telefono del Laboratorio"
            required
            value={form.Telefono}
            onChange={(e) => setForm(e.target.value, "Telefono")}
          />
        </Box>
      </FormDialog>
    </>
  );
};
