import { TextField } from "@mui/material";
import { FormDialog } from "../../../ui/Dialog/FormDialog";

export const UserEdit = () => {
  return (
    <FormDialog title={"Editar usuario"} handleSubmit={function (): void {
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
