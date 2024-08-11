import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { useDialog } from "../../../hooks/useDialog";
import { FormDialog } from "../../../ui/Dialog/FormDialog";
import { useForm } from "../../../hooks/useForm";

interface CompraDetalleDTO {
  id: number;
  producto: string;
  cantidad: number;
  precioUnitario: number;
  precioTotal: number;
}

interface CompraDTO {
  id: number;
  proveedor: string;
  fechaCompra: string;
  subtotal: number;
  ivaPor: number;
  iva: number;
  total: number;
  compraDetalle: CompraDetalleDTO[];
}

interface LaboratoryViewProps {
  compra?: CompraDTO; // Hacer que compra sea opcional
}

const defaultCompraDetalle: CompraDetalleDTO[] = [
  {
    id: 1,
    producto: "Producto de Ejemplo",
    cantidad: 1,
    precioUnitario: 100.0,
    precioTotal: 100.0,
  },
];

const defaultCompra: CompraDTO = {
  id: 0,
  proveedor: "Proveedor de Ejemplo",
  fechaCompra: new Date().toISOString(),
  subtotal: 100.0,
  ivaPor: 21,
  iva: 21.0,
  total: 121.0,
  compraDetalle: defaultCompraDetalle,
};

export const LaboratoryView: React.FC<LaboratoryViewProps> = ({
  compra = defaultCompra,
}) => {
  const {
    id,
    proveedor,
    fechaCompra,
    subtotal,
    ivaPor,
    iva,
    total,
    compraDetalle,
  } = compra;
  const { openCreateDialog, 
    handleOpenCreateDialog,
    handleCloseCreateDialog 
  } = useDialog();
//   const { form, setForm } = useForm({...compra});

//   const handleSubmit = () => {
    
//   }
  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Card variant="outlined">
        <CardContent>
          <Box sx={{ marginBottom: 2 }}>
            <Box sx={{ marginBottom: 2, alignItems: "center" }}>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Typography variant="h6" component="div" gutterBottom>
                    Compra #{id}
                  </Typography>
                </Grid>
                <Grid item xs={6} textAlign="right">
                  <Typography variant="subtitle2" color="textSecondary">
                    Fecha de Compra:{" "}
                    {new Date(fechaCompra).toLocaleDateString()}{" "}
                    {new Date(fechaCompra).toLocaleTimeString()}
                  </Typography>
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Proveedor"
                value={proveedor}
                InputProps={{ readOnly: true }}
                variant="outlined"
                margin="normal"
              />
            </Box>
          </Box>
          <Box sx={{ marginTop: 2, width: "100%" }}>
            <Grid container alignItems="center">
              <Grid item xs={3} paddingRight={5}>
                <TextField
                  fullWidth
                  label="Subtotal"
                  value={`$${subtotal.toFixed(2)}`}
                  InputProps={{ readOnly: true }}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={3} paddingRight={5}>
                <TextField
                  fullWidth
                  label={`IVA (${ivaPor}%)`}
                  value={`$${iva.toFixed(2)}`}
                  InputProps={{ readOnly: true }}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={3} paddingRight={5}>
                <TextField
                  fullWidth
                  label="Total"
                  value={`$${total.toFixed(2)}`}
                  InputProps={{ readOnly: true }}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      <Box
        sx={{
          marginBottom: 6,
          display: "flex",
          justifyContent: "flex-end",
          padding: 2,
        }}
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
          Agregar producto
        </Button>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Producto</TableCell>
                <TableCell>Cantidad</TableCell>
                <TableCell>Precio Unitario</TableCell>
                <TableCell>Precio Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {compraDetalle.map((detalle) => (
                <TableRow key={detalle.id}>
                  <TableCell>{detalle.id}</TableCell>
                  <TableCell>{detalle.producto}</TableCell>
                  <TableCell>{detalle.cantidad}</TableCell>
                  <TableCell>${detalle.precioUnitario.toFixed(2)}</TableCell>
                  <TableCell>${detalle.precioTotal.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* <FormDialog
        title="Crear producto"
        handleSubmit={(handleSubmit)}
        openDialog={openCreateDialog}
        handleDialog={handleCloseCreateDialog}
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
            type="number"
            name="precioCompra"
            label="Precio Compra"
            placeholder="ej: 50.00"
            required
            value={form.Cantidad}
            onChange={(e) => setForm(Number(e.target.value), "PrecioCompra")}
          />
        </Box>
      </FormDialog> */}
    </Box>
  );
};
