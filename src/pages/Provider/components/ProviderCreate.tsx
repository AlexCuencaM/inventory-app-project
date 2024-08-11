import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { useDialog } from "../../../hooks/useDialog";
import { FormDialog } from "../../../ui/Dialog/FormDialog";
import { initialAppProvider } from "../../../state/initialStates";
import { useForm } from "../../../hooks/useForm";
import { useProvider } from "../../../hooks/useProvider";
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert";
import { useState } from "react";

export const ProviderCreate = () => {
  const { openCreateDialog, handleOpenCreateDialog, handleCloseCreateDialog } =
    useDialog();
  const { form, setForm, setStateForm } = useForm({ ...initialAppProvider });
  const { postAsync } = useProvider();
  const [laboratories, setLaboratories] = useState<any[]>([]);

  const handleSubmit = () => {
    postAsync(form)
      .then((res) => {
        inventoryAlert(res);
        setStateForm({ ...initialAppProvider });
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
          Crear Providero
        </Button>
      </Box>

      <FormDialog
        title="Crear Proveedor"
        handleSubmit={handleSubmit}
        openDialog={openCreateDialog}
        handleDialog={handleCloseCreateDialog}
        maxWidth="sm"
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            variant="filled"
            fullWidth
            name="nombre"
            label="Nombre"
            placeholder="ej: Providero123"
            required
            value={form.Nombre}
            onChange={(e) => setForm(e.target.value, "Nombre")}
          />
          <TextField
            variant="filled"
            fullWidth
            name="telefono"
            label="Telefono"
            placeholder="ej: 123456789"
            required
            value={form.Telefono}
            onChange={(e) => setForm(e.target.value, "Telefono")}
          />
          <TextField
            variant="filled"
            fullWidth
            name="direccion"
            label="Direccion"
            placeholder="ej: Calle123"
            required
            value={form.Direccion}
            onChange={(e) => setForm(e.target.value, "Direccion")}
          />
        </Box>
      </FormDialog>
    </>
  );
};
