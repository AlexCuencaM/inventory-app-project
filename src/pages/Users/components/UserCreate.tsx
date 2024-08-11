import { Box, Button, TextField } from "@mui/material";
import { useDialog } from "../../../hooks/useDialog";
import { FormDialog } from "../../../ui/Dialog/FormDialog";
import { useForm } from "../../../hooks/useForm";
import { initialAppUser } from "../../../state/initialStates";
import { useUser } from "../../../hooks/useUser";
import { inventoryAlert } from "../../../ui/Alert/InventoryAlert";
import { PasswordTextField } from "../../Login/components/PasswordTextField";

export const UserCreate = () => {
  const { openCreateDialog, 
    handleOpenCreateDialog,
    handleCloseCreateDialog 
  } = useDialog();
  const { form, setForm, setStateForm } = useForm({...initialAppUser});
  const { postAsync } = useUser();
  const handleSubmit = () => {
    postAsync(form).then(res => {
        inventoryAlert(res);
        setStateForm({...initialAppUser})
        window.location.reload()
    })
    .catch(e => inventoryAlert(e.response?.data.message ?? "Unexpected error"));
  };

  return (
    <>
    <Box sx={{ marginBottom: 6, display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        onClick={handleOpenCreateDialog}
        variant="contained"
        size="small"
        sx={{
          fontSize: '0.75rem',
          padding: '4px 8px' ,
          width:'15%',
          height:40
        }}
      >
        Crear usuario
      </Button>
    </Box>

      <FormDialog
        title={"Crear usuario"}
        handleSubmit={handleSubmit}
        openDialog={openCreateDialog}
        handleDialog={handleCloseCreateDialog}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            variant="filled"
            fullWidth
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
    </>
  );
};
