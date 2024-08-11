import { TextField } from "@mui/material";
import { FormDialog } from "../../../ui/Dialog/FormDialog";
import { useDialog } from "../../../hooks/useDialog";

export const UserEdit = () => {
    const {openEditDialog, handleCloseEditDialog } = useDialog()
  return (
    <FormDialog openDialog={openEditDialog} handleDialog={handleCloseEditDialog} title={"Editar usuario"} handleSubmit={function (): void {
        throw new Error("Function not implemented.");
    } }>
      <TextField
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
          />
  </FormDialog>
  )
}
