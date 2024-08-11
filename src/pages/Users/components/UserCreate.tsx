import { Box, Button, Paper, TextField } from "@mui/material";
import { useDialog } from "../../../hooks/useDialog";
import { FormDialog } from "../../../ui/Dialog/FormDialog";

export const UserCreate = () => {
  const { openCreateDialog, handleOpenCreateDialog, handleCloseCreateDialog } =
    useDialog();
  const handleClick = () => {
    handleOpenCreateDialog();
  };
  return (
    <>
    <Box sx={{ marginBottom: 6, display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        onClick={handleClick}
        variant="contained"
        size="small"
        sx={{
          fontSize: '0.75rem',
          padding: '4px 8px' ,
          width:'15%'
        }}
      >
        Crear usuario
      </Button>
    </Box>

      <FormDialog
        title={"Crear usuario"}
        handleSubmit={function (): void {
          throw new Error("Function not implemented.");
        }}
        openDialog={openCreateDialog}
        handleDialog={handleCloseCreateDialog}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            variant="filled"
            fullWidth
            name="Nombres"
            label="Nombres"
            placeholder="ej: Juan"
            required
          />
          <TextField
            variant="filled"
            fullWidth
            name="Apellidos"
            label="Apellidos"
            placeholder="ej: Pérez"
            required
          />
          <TextField
            variant="filled"
            fullWidth
            name="Correo"
            label="Correo"
            placeholder="ej: usuario@ejemplo.com"
            required
          />
          <TextField
            variant="filled"
            fullWidth
            name="Username"
            label="Usuario"
            placeholder="ej: usuario123"
            required
                        // value={form.Username}
            // onChange={e => {
            //     setForm(e.target.value, "Username")
            // }}
          />
          <TextField
            variant="filled"
            fullWidth
            name="Contraseña"
            label="Contraseña"
            type="password"
            placeholder="********"
            required
          />
        </Box>
      </FormDialog>
    </>
  );
};
