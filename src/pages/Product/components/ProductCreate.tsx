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
import { initialAppProduct } from "../../../state/initialStates";
import { useForm } from "../../../hooks/useForm";
import { useProduct } from "../../../hooks/useProduct";
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert";
import { useState } from "react";

export const ProductCreate = () => {
  const { openCreateDialog, handleOpenCreateDialog, handleCloseCreateDialog } =
    useDialog();
  const { form, setForm, setStateForm } = useForm({ ...initialAppProduct });
  const { postAsync } = useProduct();
  const [laboratories, setLaboratories] = useState<any[]>([]);

  const handleSubmit = () => {
    postAsync(form)
      .then((res) => {
        inventoryAlert(res);
        setStateForm({ ...initialAppProduct });
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
          Crear producto
        </Button>
      </Box>

      <FormDialog
        title="Crear producto"
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
            placeholder="ej: Producto123"
            required
            value={form.Nombre}
            onChange={(e) => setForm(e.target.value, "Nombre")}
          />
          <TextField
            variant="filled"
            fullWidth
            name="descripcion"
            label="Descripción"
            placeholder="ej: Descripción del producto"
            required
            value={form.Descripcion}
            onChange={(e) => setForm(e.target.value, "Descripcion")}
          />
          <FormControl fullWidth variant="filled" margin="normal">
            <InputLabel>Laboratorio</InputLabel>
            <Select
              name="laboratorioName"
              value={form.LaboratorioName}
              onChange={(e) => setForm(e.target.value, "LaboratorioName")}
              label="Laboratorio"
              required
            >
              {/* {laboratories.map((lab) => (
                <MenuItem key={lab.id} value={lab.name}>
                  {lab.name}
                </MenuItem>
              ))} */}
            </Select>
          </FormControl>
          <TextField
            variant="filled"
            fullWidth
            type="number"
            name="precioCompra"
            label="Precio Compra"
            placeholder="ej: 50.00"
            required
            value={form.PrecioCompra}
            onChange={(e) => setForm(Number(e.target.value), "PrecioCompra")}
          />
          <TextField
            variant="filled"
            fullWidth
            type="number"
            name="precioVenta"
            label="Precio Venta"
            placeholder="ej: 75.00"
            required
            value={form.PrecioVenta}
            onChange={(e) => setForm(Number(e.target.value), "PrecioVenta")}
          />
        </Box>
      </FormDialog>
    </>
  );
};
