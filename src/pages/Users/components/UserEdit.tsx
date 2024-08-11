import { Box, TextField } from "@mui/material";
import { FormDialog } from "../../../ui/Dialog/FormDialog";
import { useDialog } from "../../../hooks/useDialog";
import { initialAppUser } from "../../../state/initialStates";
import { useUser } from "../../../hooks/useUser";
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert";
import { PasswordTextField } from "../../Login/components/PasswordTextField";

export const UserEdit = () => {
  const {openEditDialog, handleCloseEditDialog } = useDialog();
  const { putAsync, setStateForm, form, setForm } = useUser();
  const handleSubmit = () => {
    putAsync(form).then(res => {
        inventoryAlert(res);
        setStateForm({...initialAppUser})
    })
    .catch(e => inventoryAlert(e.response?.data.message ?? "Unexpected error"));
  };
  
  return (
    <FormDialog openDialog={openEditDialog} 
        handleDialog={handleCloseEditDialog} 
        title={"Editar usuario"}
        handleSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            variant="filled"
            fullWidth
            name="Nombres"
            label="Nombres"
            placeholder="ej: Juan"
            value={form.nombres}
            onChange={e => {
                  setForm(e.target.value, "nombres")
              }}
            required
          />
          <TextField
            variant="filled"
            fullWidth
            name="Identificacion"
            label="Identificacion"
            placeholder="ej: 0912345678"
            value={form.identificacion}
            onChange={e => {
                  setForm(e.target.value, "identificacion")
              }}
            required
          />
          <TextField
            variant="filled"
            fullWidth
            name="Apellidos"
            label="Apellidos"
            placeholder="ej: Pérez"
            value={form.apellidos}
            onChange={e => {
                  setForm(e.target.value, "apellidos")
              }}
            required
          />
          <TextField
            variant="filled"
            fullWidth
            name="Correo"
            label="Correo"
            placeholder="ej: usuario@ejemplo.com"
            value={form.correo}
            onChange={e => {
                  setForm(e.target.value, "correo")
              }}
            required
          />
          <TextField
            variant="filled"
            fullWidth
            name="Username"
            label="Usuario"
            value={form.username}
            onChange={e => {
                  setForm(e.target.value, "username")
              }}
            placeholder="ej: usuario123"
            required
          />
          <PasswordTextField name={"Contraseña"}
                value={form.contraseña}
                onChange={e => {
                    setForm(e.target.value, "contraseña")
                }}
                />
      </Box>
  </FormDialog>
  )
}
