import {
  Box,
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
} from "@mui/material";
import { FormDialog } from "../../../ui/Dialog/FormDialog";
import { useDialog } from "../../../hooks/useDialog";
import { initialAppLaboratory } from "../../../state/initialStates"; // Cambia según tu archivo de estados iniciales
import { useLaboratory } from "../../../hooks/useLaboratory"; // Asegúrate de tener un hook similar para laboratorios
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert"; // Puedes mantener esta alerta si es general
import { Laboratory } from "../../../data/Entities/Laboratory"; // Asegúrate de importar el tipo Laboratory

interface LaboratoryEditProps {
  setStateForm: (value: Laboratory) => void;
  form: Laboratory;
  setForm: <K extends keyof Laboratory>(value: Laboratory[K], field: K) => void;
}

export const LaboratoryEdit = ({
  setStateForm,
  form,
  setForm,
}: LaboratoryEditProps) => {
  const { openEditDialog, handleCloseEditDialog } = useDialog();
  const { putAsync } = useLaboratory(); // Hook para manejar laboratorios

  const handleSubmit = () => {
    putAsync(form)
      .then((res) => {
        inventoryAlert(res);
        setStateForm({ ...initialAppLaboratory }); // Cambia a initialAppLaboratory
      })
      .catch((e) =>
        inventoryAlert(e.response?.data.message ?? "Unexpected error")
      );
  };

  return (
    <FormDialog
      openDialog={openEditDialog}
      handleDialog={handleCloseEditDialog}
      title={"Editar laboratorio"}
      handleSubmit={handleSubmit}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          variant="filled"
          fullWidth
          name="identificacion"
          label="Identificación"
          placeholder="ej: 12345678"
          required
          value={form.Identificacion}
          onChange={(e) => setForm(e.target.value, "Identificacion")}
        />
        <TextField
          variant="filled"
          fullWidth
          name="nombreCompleto"
          label="Nombre Completo"
          placeholder="ej: Laboratorio XYZ"
          required
          value={form.NombreCompleto}
          onChange={(e) => setForm(e.target.value, "NombreCompleto")}
        />

        <TextField
          variant="filled"
          fullWidth
          name="telefono"
          label="Teléfono"
          placeholder="ej: +1234567890"
          value={form.Telefono ?? ""}
          onChange={(e) => setForm(e.target.value, "Telefono")}
        />
        <TextField
          variant="filled"
          fullWidth
          name="direccion"
          label="Dirección"
          placeholder="ej: Calle Falsa 123"
          value={form.Direccion ?? ""}
          onChange={(e) => setForm(e.target.value, "Direccion")}
        />
      </Box>
    </FormDialog>
  );
};
