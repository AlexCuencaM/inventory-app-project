import { Box, TextField } from "@mui/material";
import { FormDialog } from "../../../ui/Dialog/FormDialog";
import { useDialog } from "../../../hooks/useDialog";
import { initialAppClient } from "../../../state/initialStates"; // Cambia según tu archivo de estados iniciales
import { useClient } from "../../../hooks/useClient"; // Asegúrate de tener un hook similar para clientes
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert"; // Puedes mantener esta alerta si es general
import { Client } from "../../../data/Entities/Client"; // Asegúrate de importar el tipo Client

interface ClientEditProps {
  setStateForm: (value: Client) => void;
  form: Client;
  setForm: <K extends keyof Client>(value: Client[K], field: K) => void;
}

export const ClientEdit = ({
  setStateForm,
  form,
  setForm,
}: ClientEditProps) => {
  const { openEditDialog, handleCloseEditDialog } = useDialog();
  const { putAsync } = useClient(); // Hook para manejar clientes

  const handleSubmit = () => {
    putAsync(form)
      .then((res) => {
        inventoryAlert(res);
        setStateForm({ ...initialAppClient }); // Cambia a initialAppClient
      })
      .catch((e) =>
        inventoryAlert(e.response?.data.message ?? "Unexpected error")
      );
  };

  return (
    <FormDialog
      openDialog={openEditDialog}
      handleDialog={handleCloseEditDialog}
      title={"Editar Cliente"}
      handleSubmit={handleSubmit}
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
  );
};
