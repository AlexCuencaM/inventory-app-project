import { Box, FormControl, InputLabel, Select, TextField } from "@mui/material";
import { FormDialog } from "../../../ui/Dialog/FormDialog";
import { useDialog } from "../../../hooks/useDialog";
import { initialAppProvider } from "../../../state/initialStates"; // Cambia según tu archivo de estados iniciales
import { useProvider } from "../../../hooks/useProvider"; // Asegúrate de tener un hook similar para Provideros
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert"; // Puedes mantener esta alerta si es general
import { Provider } from "../../../data/Entities/Provider"; // Asegúrate de importar el tipo Provider

interface ProviderEditProps {
  setStateForm: (value: Provider) => void;
  form: Provider;
  setForm: <K extends keyof Provider>(value: Provider[K], field: K) => void;
}

export const ProviderEdit = ({
  setStateForm,
  form,
  setForm,
}: ProviderEditProps) => {
  const { openEditDialog, handleCloseEditDialog } = useDialog();
  const { putAsync } = useProvider();
  const handleSubmit = () => {
    putAsync(form)
      .then((res) => {
        inventoryAlert(res);
        setStateForm({ ...initialAppProvider }); // Cambia a initialAppProvider
      })
      .catch((e) =>
        inventoryAlert(e.response?.data.message ?? "Unexpected error")
      );
  };

  return (
    <FormDialog
      title="Editar Proveedor"
      handleSubmit={handleSubmit}
      openDialog={openEditDialog}
      handleDialog={handleCloseEditDialog}
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
  );
};
