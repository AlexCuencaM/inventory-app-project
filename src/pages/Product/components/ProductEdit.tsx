import { Box, FormControl, InputLabel, Select, TextField } from "@mui/material";
import { FormDialog } from "../../../ui/Dialog/FormDialog";
import { useDialog } from "../../../hooks/useDialog";
import { initialAppProduct } from "../../../state/initialStates"; // Cambia según tu archivo de estados iniciales
import { useProduct } from "../../../hooks/useProduct"; // Asegúrate de tener un hook similar para productos
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert"; // Puedes mantener esta alerta si es general
import { Product } from "../../../data/Entities/Product"; // Asegúrate de importar el tipo Product

interface ProductEditProps {
  setStateForm: (value: Product) => void;
  form: Product;
  setForm: <K extends keyof Product>(value: Product[K], field: K) => void;
}

export const ProductEdit = ({
  setStateForm,
  form,
  setForm,
}: ProductEditProps) => {
  const { openEditDialog, handleCloseEditDialog } = useDialog();
  const { putAsync } = useProduct();
  const handleSubmit = () => {
    putAsync(form)
      .then((res) => {
        inventoryAlert(res);
        setStateForm({ ...initialAppProduct }); // Cambia a initialAppProduct
      })
      .catch((e) =>
        inventoryAlert(e.response?.data.message ?? "Unexpected error")
      );
  };

  return (
    <FormDialog
      openDialog={openEditDialog}
      handleDialog={handleCloseEditDialog}
      title={"Editar producto"}
      handleSubmit={handleSubmit}
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
  );
};
