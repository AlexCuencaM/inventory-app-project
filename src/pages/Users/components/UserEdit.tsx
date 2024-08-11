import { Box, TextField } from "@mui/material";
import { FormDialog } from "../../../ui/Dialog/FormDialog";
import { useDialog } from "../../../hooks/useDialog";

export const UserEdit = () => {
    const {openEditDialog, handleCloseEditDialog } = useDialog()
  return (
    <FormDialog openDialog={openEditDialog} handleDialog={handleCloseEditDialog} title={"Editar usuario"} handleSubmit={function (): void {
        throw new Error("Function not implemented.");
    } }>
      {/* <TextField
          variant="filled"
          fullWidth
          name='Username'
          label="Usuario"
          placeholder='ej: usuario123'
          required
              // value={form.Username}
              // onChange={e => {
              //     setForm(e.target.value, "Username")
              // }}
          /> */}
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
  )
}
